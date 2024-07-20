import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import CreateProduct from '../../component/Shop/CreateProduct.jsx'

const ShopCreateProduct = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="flex items-center justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={4} />

                </div>

                <div className="w-full flex justify-center">
                    <CreateProduct />

                </div>

            </div>
        </div>

    )
}

export default ShopCreateProduct