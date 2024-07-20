import React, { useEffect } from 'react'
import AdminHeader from '../component/layout/AdminHeader.jsx'
import AdminSidebar from '../component/Admin/layout/AdminSidebar.jsx'
import AdminDashboardMain from '../component/Admin/AdminDashboardMain.jsx'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrdersOfAdmin } from '../redux/actions/order.js'


const AdminDashboardOrders = () => {

    const { adminOrders } = useSelector((state) => state.order)




    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllOrdersOfAdmin())

    }, [])

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.row.status === "Delivered" ? "greenColor" : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: "createdAt",
            headerName: "Order Date",
            type: "text",
            minWidth: 130,
            flex: 0.8,
        },

    ];

    const row = [];

    adminOrders && adminOrders.forEach((item) => {
        row.push({
            id: item?._id,
            itemsQty: item?.cart.reduce((acc, item) => acc + item?.qty, 0),
            total: "US$ " + item?.totalPrice,
            status: item?.status,
            createdAt: item?.createdAt.slice(0, 10),
        });
    });

    return (
        <div>
            <AdminHeader />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full">
                    <div className="w-[80px] 800px:w-[330px]">
                        <AdminSidebar active={2} />
                    </div>
                    <div className='w-full min-h-[45vh] pt-5 flex flex-col justify-center rounded'>
                        <h3 className="text-[22px] ml-1 font-Poppins pb-2">Latest Orders</h3>
                        <div className="w-[98%]">
                            <DataGrid
                                rows={row}
                                columns={columns}
                                pageSize={4}
                                disableSelectionOnClick
                                autoHeight
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardOrders
