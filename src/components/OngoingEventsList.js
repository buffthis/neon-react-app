// src/components/OngoingEventsList.js
import React, { useEffect } from 'react';
import useEventStore from '../stores/eventStore';
import EventCard from './EventCard';

const OngoingEventsList = () => {
  const { events, loading, error, fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="event-cards-container">
      {events.map((event) => (
        <EventCard key={event.eventId} event={event} />
      ))}
    </div>
  );
};

export default OngoingEventsList;