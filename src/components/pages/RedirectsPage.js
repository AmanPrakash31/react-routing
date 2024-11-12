import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';

function RedirectsPage() {
  const [redirect, setRedirect] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(timer);
          setRedirect(true);
        }
        return prevProgress + 10;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-content-center p-flex-column mt-5 mb-5">
      <Card title="Redirecting..." className="mb-4 px-3 mt-4" style={{ width: '90%', maxWidth: '600px' }}>
        <p>Your page is redirecting to the home page. Please wait...</p>
        <ProgressBar value={progress} showValue={false} />
      </Card>
    </div>
  );
}

export default RedirectsPage;
