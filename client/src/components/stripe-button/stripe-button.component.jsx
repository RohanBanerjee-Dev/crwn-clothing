import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51K2e0zSJkE2lk04PXuOiDZbGMR7tFiMl1JxSxCteADsVyhQdegMAXsBFT6FJW5so7H3Z1xbiZS9JW6PhHuXRDmye00Qkb43g0k';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please sure you use the provided credit card.')
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;