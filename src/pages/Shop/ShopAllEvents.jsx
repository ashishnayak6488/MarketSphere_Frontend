import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import AllEvents from '../../component/Shop/AllEvents.jsx'

const ShopAllEvents = () => {
    return (
        <div>
            <DashboardHeader />

            <div className="flex justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={5} />

                </div>

                <div className="w-full flex justify-center">
                    <AllEvents />

                </div>

            </div>
        </div>
    )
}

export default ShopAllEvents