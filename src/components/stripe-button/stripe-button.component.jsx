import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from ("axios")

export default function StripeCheckoutButoon({price}){

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KP4ZDAz0UubsMyc0dC7sBPz1IGWUv2KRESKVVD1CumLOBEGVqjcHhrvucq2o8pPaWA9SOyqcEsGyj25FdvlspCo00ososILQC'

    function onToken (token){
       axios({
           url:'payment',
           method:'post',
            data:{
                amount:priceForStripe,
                token
            }
       })
       .then(response => {
           alert('Payment successful');
       }).catch(error=>{
           console.log('Payment error: ',JSON.parse(error))
           alert("error try again")
       })
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
