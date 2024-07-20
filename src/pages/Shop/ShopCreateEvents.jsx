import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import CreateEvent from '../../component/Shop/CreateEvent.jsx'

const ShopCreateEvents = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="flex items-center justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={6} />

                </div>

                <div className="w-full flex justify-center">
                    <CreateEvent />

                </div>

            </div>
        </div>

    )
}

export default ShopCreateEvents