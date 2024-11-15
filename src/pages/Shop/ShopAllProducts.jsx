import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import AllProducts from '../../component/Shop/AllProducts.jsx'

const ShopAllProducts = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="flex justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={3} />

                </div>

                <div className="w-full flex justify-center">
                    <AllProducts />

                </div>

            </div>
        </div>
    )
}

export default ShopAllProducts