import React from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'
import AdminSellers from '../component/Admin/AdminSellers.jsx'


const AdminDashboardSellers = () => {
    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={3} />
                    </div>
                    <AdminSellers />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardSellers

