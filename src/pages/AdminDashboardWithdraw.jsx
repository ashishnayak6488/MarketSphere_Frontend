import React from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'
import AdminWithdraw from '../component/Admin/AdminWithdraw.jsx'


const AdminDashboardWithdraw = () => {
    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={7} />
                    </div>
                    <AdminWithdraw />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardWithdraw