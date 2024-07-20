import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import Footer from '../../component/layout/Footer/Footer'
import ShopSettings from '../../component/Shop/ShopSettings.jsx'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar.jsx'

const ShopSettingsPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-center justify-between w-full">
                <div className='w-[80px] 800px:w-[260px] fixed top-0 left-0 mt-20'>
                    <DashboardSidebar active={11} />

                </div>
                <div className='w-[80vw] 800px:w-full ml-20'>
                    <ShopSettings />

                </div>



            </div>
        </div>
    )
}

export default ShopSettingsPage