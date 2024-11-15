import React, { useState } from 'react'
import Header from '../component/layout/Header'
import styles from '../styles/styles'
import ProfileSidebar from '../component/Profile/ProfileSidebar.jsx'
import ProfileContent from '../component/Profile/ProfileContent.jsx'
import { useSelector } from 'react-redux'
import Loader from '../component/layout/Loader.jsx'

const ProfilePage = () => {

    const { loading } = useSelector((state) => state.user);


    const [active, setActive] = useState(1)

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
                        <div className='w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]'>
                            <ProfileSidebar active={active} setActive={setActive} />

                        </div>
                        <ProfileContent active={active} />

                    </div>
                </>
            )}
        </div>
    )
}

export default ProfilePage