import { getUserMeLoader } from "@/app/data/services/get-user-me-loader"
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
    const user = await getUserMeLoader()
    const {email} = user.data
    const {planName, price, description} = await req.json()

    const session = await stripe.checkout.sessions.create({
        success_url: process.env.NEXT_PUBLIC_SUCCESS_URL,
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: planName,
                        description: description
                    },
                    unit_amount: (price * 100),
                },
                quantity: 1,
            },
        ],
        customer_email: email,
        mode: "payment"
    })

    return NextResponse.json(session)
}