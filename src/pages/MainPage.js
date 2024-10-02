import React from 'react';
import OngoingEventsList from '../components/OngoingEventsList';
import MaintenanceForm from '../components/MaintenanceForm';
import MainLayout from '../layouts/MainLayout';

const OngoingEventsListPage = () => {
  return (
    <MainLayout>
      <MaintenanceForm />
      <OngoingEventsList />
    </MainLayout>
  );
};

export default OngoingEventsListPage;