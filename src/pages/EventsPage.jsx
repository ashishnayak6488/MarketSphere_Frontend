import React from 'react'
import Header from '../component/layout/Header'
import EventCard from '../component/Events/EventCard'
import { useSelector } from 'react-redux'
import Loader from '../component/layout/Loader'

const EventsPage = () => {

    const { allEvents, isLoading } = useSelector((state) => state.events)

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <Header activeHeading={4} />
                        <EventCard active={true} data={allEvents && allEvents[0]} />
                    </div>
                )
            }
        </>
    )
}

export default EventsPage