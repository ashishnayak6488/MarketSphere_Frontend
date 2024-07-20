import React from 'react'
import DashboardHeader from '../../component/Shop/Layout/DashboardHeader'
import DashboardSidebar from '../../component/Shop/Layout/DashboardSidebar'
import WithdrawMoney from '../../component/Shop/WithdrawMoney.jsx'

const ShopWithdrawMoneyPage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-center justify-between w-full">
                <div className='w-[80px] 800px:w-[330px]'>
                    <DashboardSidebar active={7} />

                </div>

                <WithdrawMoney />

            </div>
        </div>
    )
}

export default ShopWithdrawMoneyPage