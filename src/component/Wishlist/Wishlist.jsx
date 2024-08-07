import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { BsCartPlus } from 'react-icons/bs'
import styles from '../../styles/styles'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../redux/actions/wishlist'
import { addToCart } from '../../redux/actions/cart'

const Wishlist = ({ setOpenWishlist }) => {


    const { wishlist } = useSelector((state) => state.wishlist)

    const dispatch = useDispatch()

    const removeFromWishlistHandler = (data) => {
        dispatch(removeFromWishlist(data))
    }

    const addToCartHandler = (data) => {
        const newData = { ...data, qty: 1 }
        dispatch(addToCart(newData))
        setOpenWishlist(false)
    }


    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
            <div className="fixed top-0 right-0 h-full overflow-y-scroll w-[90%] 800px:w-[30%] bg-white flex flex-col justify-between shadow-sm">
                {
                    wishlist && wishlist === 0 ? (
                        <div className='w-full h-screen flex items-center justify-center'>
                            <div className='flex w-full justify-end pt-5 pr-5 fixed top-3 right-3'>
                                <RxCross1
                                    size={25}
                                    className='cursor-pointer'
                                    onClick={() => setOpenWishlist(false)}
                                />

                            </div>
                            <h5>Wishlist Items is empty</h5>

                        </div>

                    ) : (
                        <div>
                            <div className="flex w-full justify-end pt-5 pr-5">
                                <RxCross1 size={25} className='cursor-pointer' onClick={() => setOpenWishlist(false)} />

                            </div>
                            {/* Items length */}
                            <div className={`${styles.normalFlex} p-4`}>
                                <AiOutlineHeart size={25} />
                                <h5 className='pl-2 text-[20] font-[500]'>
                                    {wishlist && wishlist.length} Items

                                </h5>

                            </div>
                            {/* cart Items */}
                            <br />
                            <div className='w-full border-t'>
                                {
                                    wishlist && wishlist.map((i, index) => (
                                        <CartSingle key={index} data={i} removeFromWishlistHandler={removeFromWishlistHandler} addToCartHandler={addToCartHandler} />
                                    ))
                                }

                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}


const CartSingle = ({ data, addToCartHandler, removeFromWishlistHandler }) => {
    const [value, setValue] = useState(1)
    const totalPrice = data.discountPrice * value
    return (
        <div className="border-b p-4">
            <div className='w-full 800px:flex items-center'>
                <RxCross1
                    size={50}
                    className='cursor-pointer mb-2 800px:mb-[unset] ml-2 800px:ml-[unset]'
                    onClick={() => removeFromWishlistHandler(data)}
                />
                <img
                    src={`${data?.images[0]?.url}`}
                    alt=""
                    className='w-[130px] h-min ml-2 mr-2 rounded-[5px]'
                />

                <div className='pl-[5px]'>
                    <h1>{data.name}</h1>
                    <h4 className='font-[600] pt-3 800px:pt-[3px] text-[17px] text-[#d02222] font-Roboto'>US${totalPrice}</h4>

                </div>
                <div>
                    <BsCartPlus size={20} className='cursor-pointer' title='Add to Cart'
                        onClick={() => addToCartHandler(data)} />
                </div>
            </div>

        </div>

    )
}

export default Wishlist