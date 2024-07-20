import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backend_url, server } from '../../server'
import { AiOutlineCamera } from 'react-icons/ai'
import styles from '../../styles/styles'
import axios from 'axios'
import { toast } from 'react-toastify'
import { loadSeller } from '../../redux/actions/user'

const ShopSettings = () => {

    const { seller } = useSelector((state) => state.seller)

    const [avatar, setAvatar] = useState()
    const [name, setname] = useState(seller && seller.name)
    const [description, setDescription] = useState(seller && seller.description)
    const [address, setAddress] = useState(seller && seller.address)
    const [phoneNumber, setPhoneNumber] = useState(seller && seller.phoneNumber)
    const [zipCode, setZipCode] = useState(seller && seller.zipCode)

    const dispatch = useDispatch()



    const handleImage = async (e) => {
        e.preventDefault()

        const file = e.target.files[0];
        setAvatar(file);

        const formData = new FormData()

        formData.append('image', e.target.files[0])
        await axios.put(`${server}/shop/update-shop-avatar`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true

        }).then((res) => {
            toast.success("Profile Picture Updated Successfully")
            dispatch(loadSeller())
        }).catch((error) => {
            toast.error(error.response.data.message)
        })

    }



    const updateHandler = async (e) => {
        e.preventDefault()

        await axios.put(`${server}/shop/update-shop-info`, {
            name,
            address,
            description,
            phoneNumber,
            zipCode,
        }, { withCredentials: true }).then((res) => {
            toast.success("Shop info updated successfully")
            dispatch(loadSeller())
        }).catch((error) => {
            toast.error(error.response.data.message)
        })

    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center'>
            <div className="flex w-full 800px:w-[80%] flex-col justify-center my-5">
                <div className="w-full flex item-center justify-center">
                    <div className="relative">
                        <img src={
                            avatar ? URL.createObjectURL(avatar) : `${backend_url}${seller.avatar}`
                        }
                            alt=""
                            className='w-[200px] h-[200px] rounded-full border'
                        />

                        <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[15px]">
                            <input type="file" id='image'
                                className='hidden'
                                onChange={handleImage}
                            />
                            <label htmlFor="image">

                                <AiOutlineCamera />
                            </label>
                        </div>
                    </div>

                </div>


                {/* shop info */}

                <form
                    aria-required={true}
                    className='flex flex-col items-center'
                    onSubmit={updateHandler}
                >

                    <div className='w-[100%] 800px:w-[50%] flex items-center flex-col mt-5'>
                        <div className="w-full">
                            <label className='block pb-2 pl-[3%]'>
                                Shop Name

                            </label>
                        </div>
                        <input
                            type="text"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            placeholder={`${seller.name}`}
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />

                    </div>

                    <div className='w-[100%] 800px:w-[50%] flex items-center flex-col mt-5'>
                        <div className="w-full">
                            <label className='block pb-2 pl-[3%]'>
                                Shop Description

                            </label>
                        </div>
                        <input
                            type="text"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            placeholder={`${seller?.description ? seller?.description : "Enter your shop description"}`}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </div>

                    <div className='w-[100%] 800px:w-[50%] flex items-center flex-col mt-5'>
                        <div className="w-full">
                            <label className='block pb-2 pl-[3%]'>
                                Shop Address

                            </label>
                        </div>
                        <input
                            type="text"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            placeholder={`${seller?.address ? seller?.address : "Enter your shop Address"}`}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                    </div>

                    <div className='w-[100%] 800px:w-[50%] flex items-center flex-col mt-5'>
                        <div className="w-full">
                            <label className='block pb-2 pl-[3%]'>
                                Shop Phone Number

                            </label>
                        </div>
                        <input
                            type="number"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            placeholder={`${seller?.phoneNumber ? seller?.phoneNumber : "Enter your shop description"}`}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />

                    </div>

                    <div className='w-[100%] 800px:w-[50%] flex items-center flex-col mt-5'>
                        <div className="w-full">
                            <label className='block pb-2 pl-[3%]'>
                                Shop Zip Code

                            </label>
                        </div>
                        <input
                            type="number"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            placeholder={`${seller?.zipCode ? seller?.zipCode : "Enter your shop zipCode"}`}
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />

                    </div>

                    <div className='w-[100%] 800px:w-[50%] flex items-center flex-col mt-5'>
                        <div className="w-full">

                        </div>
                        <input
                            type="submit"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0 cursor-pointer`}
                            required
                            readOnly
                            value='Update Shop'
                        />

                    </div>


                </form>

            </div>

        </div>
    )
}

export default ShopSettings