import React, { useEffect, useState } from 'react'
import Header from '../component/layout/Header'
import styles from '../styles/styles'
import ProductCard from '../component/Route/ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import Loader from '../component/layout/Loader'

const BestSellingPage = () => {

    const [data, setData] = useState([])
    const { allProducts, isLoading } = useSelector((state) => state.products)


    useEffect(() => {
        const allProductsData = allProducts ? [...allProducts] : []
        const d = allProductsData && allProductsData.sort((a, b) => b.sold_out - a.sold_out)
        setData(d)
    }, [allProducts])

    return (

        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Header activeHeading={2} />
                        <br />
                        <br />

                        <div className={`${styles.section}`}>
                            <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 '>
                                {
                                    data && data.map((i, index) => <ProductCard data={i} key={index} />)
                                }


                            </div>

                        </div>

                    </div>
                )

            }
        </>

    )
}

export default BestSellingPage