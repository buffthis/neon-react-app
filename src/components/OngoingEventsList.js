import React, { useEffect, useState } from 'react';
import { fetchOngoingEvents } from '../api/api';
import EventCard from './EventCard';
import { Box, CircularProgress, Typography, Stack } from '@mui/material';

const OngoingEventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        const data = await fetchOngoingEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to load events.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <CircularProgress />
    </Box>
  );

  if (error) return (
    <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
      {error}
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
            <Box key={event.id} sx={{ mb: 4 }}>
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