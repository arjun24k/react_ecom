import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51Gz1AQLXgiCYEP87ZqN5k0N48E3CJu6g02qm1XkQCAJczZSt3KEpIWR1sKpjPHkZwiDqkfqUp5doouok4BMcVjyc00ACSDzy3y';
    return(
        <StripeCheckout
        label='Pay Now'
        name ='LimeLight Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />
    );
}

const onToken = token =>{
    alert('Payment Successful')
}

export default StripeCheckoutButton;