import React from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'
import AdminDashboardMain from '../component/Admin/AdminDashboardMain.jsx'


const AdminDashboardPage = () => {
    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={1} />
                    </div>
                    <AdminDashboardMain />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardPage