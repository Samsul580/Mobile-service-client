import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IhII9DCdbeD1UiIqGqBrrtm2fe0083gd7TK95IRVbTMgCChLCfCYaD8juSXmE1sD45V3f4MJt1L57Xt1RqElWGu00LLRyK1Kc');

const ProcessPayment = ({handleOrder}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handleOrder={handleOrder}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;