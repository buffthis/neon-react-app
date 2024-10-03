import React, { useEffect, useState } from 'react';
import { fetchOngoingEvents } from '../api/eventApi';
import EventCard from './EventCard';
import { CircularProgress, Typography, Box } from '@mui/material';
import styles from './OngoingEventsList.module.css'; // CSS 모듈 import

const OngoingEventsList = ({ refresh }) => {
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
  }, [refresh]); // 'refresh' prop이 변경되면 이벤트 목록을 다시 로드

  if (loading) return (
    <Box className={styles.loadingContainer}>
      <CircularProgress />
    </Box>
  );

  if (error) return (
    <Typography className={styles.errorText} variant="h6">
      {error}
    </Typography>
  );

  return (
    <Box className={styles.container}>
      <div className={styles.stack}>
        {events.length > 0 ? (
          events.map((event) => (
            <Box key={event.id}>
              <EventCard event={event} />
            </Box>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
            No ongoing events at the moment.
          </Typography>
        )}
      </div>
    </Box>
  );
};

export default OngoingEventsList;