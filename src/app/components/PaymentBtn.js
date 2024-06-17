"use client"
import { PayPalButtons, PayPalScriptProvider, FUNDING } from "@paypal/react-paypal-js"

const PaymentBtn = ({price, plan}) => {
  return (
        <PayPalScriptProvider options={{
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            currency: 'USD',
        }}>
        <PayPalButtons 
            fundingSource={FUNDING.PAYPAL}
            createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {value: price}
                    }
                ]
            })
            }}
            onApprove={(data, actions) => 
                actions.order.capture().then((details) => 
                    onSuccess(details)
            )}
            style={{
                color: "blue",
                layout: "horizontal",
                label: "pay"
            }}
        />
        </PayPalScriptProvider>
  )
}

export default PaymentBtn