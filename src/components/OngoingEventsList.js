// src/components/OngoingEventsList.js
import React, { useEffect } from 'react';
import useEventStore from '../stores/eventStore';
import EventCard from './EventCard';
import { Box, CircularProgress, Typography, Stack } from '@mui/material';

const OngoingEventsList = () => {
  const { events, loading, error, fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <CircularProgress />
    </Box>
  );

  if (error) return (
    <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
      Error fetching events: {error}
    </Typography>
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <Stack
        direction="row"
        spacing={4}
        flexWrap="wrap"
        justifyContent="center"
      >
        {events.length > 0 ? (
          events.map((event) => (
            <Box key={event.eventId} sx={{ mb: 4 }}>
              <EventCard event={event} />
            </Box>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
            No ongoing events at the moment.
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default OngoingEventsList;