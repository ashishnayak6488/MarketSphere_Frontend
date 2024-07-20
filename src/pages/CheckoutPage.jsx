import React from 'react'
import Header from '../component/layout/Header';
import CheckoutSteps from "../component/Checkout/CheckoutSteps.jsx";
import Checkout from "../component/Checkout/Checkout.jsx";
import Footer from '../component/layout/Footer/Footer';

const CheckoutPage = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <CheckoutSteps active={1} />
            <Checkout />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default CheckoutPage
