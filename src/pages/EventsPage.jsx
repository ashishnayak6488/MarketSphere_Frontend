import React from 'react'
import Header from '../component/layout/Header'
import EventCard from '../component/Events/EventCard'
import { useSelector } from 'react-redux'
import Loader from '../component/layout/Loader'

const EventsPage = () => {

    const { allEvents = [], isLoading } = useSelector((state) => state.events)

    console.log(allEvents?.length)

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Header activeHeading={4} />
                        {
                            allEvents && allEvents.length < 1 ? (
                                <div className='flex items-center justify-center mt-10 font-bold'>!!No Any Current Event is Running!!</div>
                            ) : (

                                <EventCard active={true} data={allEvents && allEvents[0]} />
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default EventsPage