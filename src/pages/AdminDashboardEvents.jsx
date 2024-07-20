import React from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'
import AdminEvents from '../component/Admin/AdminEvents.jsx'


const AdminDashboardEvents = () => {
    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={1} />
                    </div>
                    <AdminEvents />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardEvents
