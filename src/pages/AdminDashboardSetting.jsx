import React from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'


const AdminDashboardSetting = () => {
    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={8} />
                    </div>
                    <div>
                        <h1>Need to work here ....................</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardSetting

