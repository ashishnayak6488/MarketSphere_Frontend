import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader.jsx'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar.jsx'
import DashboardHero from '../../component/Shop/DashboardHero.jsx'

const ShopDashboardPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-center justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={1} />

                </div>

                <DashboardHero />

            </div>
        </div>
    )
}

export default ShopDashboardPage