import React from 'react'
import styles from '../../styles/styles'
import EventCard from './EventCard.jsx'
import { useSelector } from 'react-redux'

const Events = () => {

    const { allEvents = [], isLoading } = useSelector((state) => state.events)



    return (
        <div>
            {
                !isLoading && (
                    <div className={`${styles.section}`}>
                        <div className={`${styles.heading}`}>
                            <h1>Popular Events</h1>
                        </div>

                        <div className="w-full grid">
                            {
                                allEvents?.length !== 0 && (
                                    <EventCard data={allEvents && allEvents[0]} />

                                )
                            }
                            <h4>
                                {
                                    allEvents?.length === 0 && (
                                        <div className='flex items-center justify-center font-extrabold min-h-20'>
                                            '!!No Any Current Events Are Running!!'
                                        </div>
                                    )
                                }
                            </h4>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Events