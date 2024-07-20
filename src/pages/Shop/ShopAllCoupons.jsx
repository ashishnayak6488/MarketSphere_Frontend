import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import AllCouponCodes from '../../component/Shop/AllCouponCodes.jsx'

const ShopAllCoupons = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="flex justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={9} />

                </div>

                <div className="w-full flex justify-center">
                    <AllCouponCodes />

                </div>

            </div>
        </div>
    )
}

export default ShopAllCoupons
