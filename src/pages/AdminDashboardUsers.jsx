import React from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'
import AdminUsers from '../component/Admin/AdminUsers.jsx'


const AdminDashboardUsers = () => {
    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={4} />
                    </div>
                    <AdminUsers />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardUsers
