import React from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'
import AdminProducts from '../component/Admin/AdminProducts.jsx'


const AdminDashboardProducts = () => {
    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={5} />
                    </div>
                    <AdminProducts />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardProducts
