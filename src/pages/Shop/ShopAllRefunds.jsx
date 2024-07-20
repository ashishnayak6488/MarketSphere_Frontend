import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import AllRefundOrders from '../../component/Shop/AllRefundOrders.jsx'

const ShopAllRefunds = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="flex justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={10} />

                </div>

                <div className="w-full flex justify-center">
                    <AllRefundOrders />

                </div>

            </div>
        </div>
    )
}

export default ShopAllRefunds