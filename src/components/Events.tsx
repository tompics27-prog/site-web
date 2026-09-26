import React from 'react';
import { events as eventsData } from '../data/events';

const Events: React.FC = () => {
    return (
        <div className="events">
            <h2>Exclusive Events</h2>
            <ul>
                {eventsData.map((event) => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                        <p>Price: {event.price} €</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;