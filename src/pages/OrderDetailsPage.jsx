import React from 'react'
import Header from '../component/layout/Header'
import Footer from '../component/layout/Footer/Footer'
import UserOrderDetails from '../component/UserOrderDetails.jsx'

const OrderDetailsPage = () => {
    return (
        <div>
            <Header />
            <UserOrderDetails />
            <Footer />
        </div>
    )
}

export default OrderDetailsPage