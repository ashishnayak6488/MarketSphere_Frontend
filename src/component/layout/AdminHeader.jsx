import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { backend_url } from '../../server'
import { useSelector } from 'react-redux'

const AdminHeader = () => {

    const { user } = useSelector((state) => state.user)


    return (
        <div className='w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4'>
            <div>
                <Link to='/'>
                    <img src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg" alt="LOGO"
                        className='h-[70px]' />
                </Link>
            </div>

            <div className="flex items-center">
                <div className="flex items-cente mr-4">
                    <Link to='/dashboard-coupans' className='800px:block hidden'>
                        <AiOutlineGift
                            color='#555'
                            size={30}
                            className='mx-5 cursor-pointer'
                            title='Coupans / Gifts'
                        />
                    </Link>
                    <Link to='/dashboard-events' className='800px:block hidden'>
                        <MdOutlineLocalOffer
                            color='#555'
                            size={30}
                            className='mx-5 cursor-pointer'
                            title='All Events'
                        />
                    </Link>
                    <Link to='/dashboard-products' className='800px:block hidden'>
                        <FiShoppingBag
                            color='#555'
                            size={30}
                            className='mx-5 cursor-pointer'
                            title='All Products'
                        />
                    </Link>
                    <Link to='/dashboard-orders' className='800px:block hidden'>
                        <FiPackage
                            color='#555'
                            size={30}
                            className='mx-5 cursor-pointer'
                            title='All Orders'
                        />
                    </Link>
                    <Link to='/dashboard-Message' className='800px:block hidden'>
                        <BiMessageSquareDetail
                            color='#555'
                            size={30}
                            className='mx-5 cursor-pointer'
                            title='Messages'
                        />
                    </Link>
                    <img src={`${backend_url}${user?.avatar}`}
                        alt=""
                        className='w-[40px] h-[40px] rounded-full object-cover'
                    />


                </div>

            </div>

        </div>
    )
}

export default AdminHeader