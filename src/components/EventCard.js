// src/components/EventCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 300px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-8px);
  }
`;

const EventCard = ({ event }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={event.coverImageUrl}
        alt={event.title}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.date} {event.startTime} - {event.endTime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.location}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default EventCard;