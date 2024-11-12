import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';

function UserProfile() {
  const { userId } = useParams();

  return (
    <div className="flex justify-content-center p-flex-column">
      <Card title={`User Profile: ${userId}`} className="mb-4 mt-4" style={{ width: '40rem' }}>
        <p>Here you can show data for user: {userId}</p>
      </Card>
    </div>
  );
}

export default UserProfile;
