import React from "react";
import StripeCheckout from 'react-stripe-checkout'



export default function StripeCheckoutButoon({price}){

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KP4ZDAz0UubsMyc0dC7sBPz1IGWUv2KRESKVVD1CumLOBEGVqjcHhrvucq2o8pPaWA9SOyqcEsGyj25FdvlspCo00ososILQC'

    function onToken (token){
        console.log(token)
      return alert("Payment Successful")
    }

    return (
        <StripeCheckout 
            label= 'Pay Now'
            name = 'CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}
