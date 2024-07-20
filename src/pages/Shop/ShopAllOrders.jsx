import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import AllOrders from '../../component/Shop/AllOrders.jsx'

const ShopAllOrders = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="flex justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={2} />

                </div>

                <div className="w-full flex justify-center">
                    <AllOrders />

                </div>

            </div>
        </div>
    )
}

export default ShopAllOrders
