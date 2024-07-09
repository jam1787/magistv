import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const endPointSecret = process.env.STRIPE_ENDPOINT_SECRET
const strapiBaseURL = process.env.NEXT_PUBLIC_STRAPI_URL
const strapiOrdenToken = process.env.STRAPI_ORDER_TOKEN

export async function POST(req) {
    const body = await req.text()
    const headersList = headers()
    const sig = headersList.get('stripe-signature')

    let event

    try {
        event = stripe.webhooks.constructEvent(body, sig, endPointSecret)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 400 })
    }

    switch (event.type) {
        case "checkout.session.completed":
            const checkoutSessionCompleted = event.data.object

            const paymentDate = new Date(checkoutSessionCompleted.created * 1000)
            const subscriptionDuration = checkoutSessionCompleted.metadata.subscriptionDuration
            const subscriptionEndDate = new Date(paymentDate)
            subscriptionEndDate.setDate(subscriptionEndDate.getDate() + parseInt(subscriptionDuration))
            
            // create order in strapi
            try {
                const orderData = {
                    data: {
                        status: checkoutSessionCompleted.payment_status.toString(),
                        email: checkoutSessionCompleted.customer_email.toString(),
                        amount: checkoutSessionCompleted.amount_total / 100,
                        paymentDate: paymentDate.toISOString(),
                        subscriptionEndDate: subscriptionEndDate.toISOString(),
                        paymentID: checkoutSessionCompleted.payment_intent.toString()
                    }
                }
                const url = new URL("/api/orders", strapiBaseURL)

                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${strapiOrdenToken}`
                    },
                    body: JSON.stringify(orderData),
                    cache: "no-cache"
                })

                if (!response.ok) {
                    console.error('Error creating order in Strapi:', await response.text())
                    return NextResponse.json({ error: 'Error creating order in Strapi' }, { status: 500 })
                }

                console.log('Order created in Strapi successfully')
            } catch (error) {
                console.error('Error creating order in Strapi:', error)
                return NextResponse.json({ error: error.message }, { status: 500 })
            }
            
            console.log({ checkoutSessionCompleted })
            break

        default:
            console.log(`Unhandled event: ${event.type}`)
            break
    }

    return new Response(null, { status: 200 })
}