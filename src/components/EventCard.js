// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.coverImageUrl} alt={event.title} className="event-card-image" />
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-date">{event.date} {event.startTime} - {event.endTime}</p>
        <p className="event-card-location">{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;