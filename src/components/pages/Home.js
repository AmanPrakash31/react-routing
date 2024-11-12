import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/browser-router');
  };

  return (
    <div className="flex justify-content-center p-flex-column mt-5 mb-5">
      <Card title="Welcome to React Router Learning App" className="mb-4 px-3" style={{ width: '90%', maxWidth: '600px' }}>
        <p>This app helps you learn different types of routing techniques in React Router.</p>
        <Button label="Start Learning" icon="pi pi-arrow-right" onClick={handleStartLearning} />
      </Card>
    </div>
  );
}

export default Home;
