import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import DashboardMessages from '../../component/Shop/DashboardMessages.jsx'

const ShopInboxPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-center justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={8} />

                </div>

                <DashboardMessages />

            </div>
        </div>
    )
}

export default ShopInboxPage