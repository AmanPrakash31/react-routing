import React from 'react';
import { Card } from 'primereact/card';

function NotFound() {
  return (
    <div className="flex justify-content-center p-flex-column">
      <Card title="Page Not Found" className="mb-4 mt-4" style={{ width: '40rem' }}>
        <p>The page you are looking for does not exist.</p>
      </Card>
    </div>
  );
}

export default NotFound;
