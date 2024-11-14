import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { useLocation } from 'react-router-dom';
import { Button } from 'primereact/button';
function UserProfile() {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Scroll to top when location changes (useful for navigation between pages)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Mock user data
  const usersData = {
    1: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      description: 'John is a software engineer with a passion for building innovative applications.',
    },
    2: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      description: 'Jane is a product manager who loves to bring ideas to life through collaboration and design.',
    },
    3: {
      name: 'Samuel Green',
      email: 'samuel.green@example.com',
      description: 'Samuel is a UI/UX designer with a keen eye for detail and a passion for creating beautiful user interfaces.',
    },
  };

  // Get user data based on userId
  const user = usersData[userId] || { name: 'Unknown User', email: 'Not Available', description: 'No Description Available' };

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <div className="flex justify-content-center p-flex-column">
      <Card title={`User Profile: ${userId}`} className="mb-4 mt-4" style={{ width: '40rem' }}>
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Description:</strong> {user.description}</p>

        <h4>Additional Information</h4>
        <ul>
          <li><strong>Location:</strong> {userId === '1' ? 'San Francisco' : userId === '2' ? 'New York' : 'Los Angeles'}</li>
          <li><strong>Joined:</strong> {userId === '1' ? '2015' : userId === '2' ? '2018' : '2020'}</li>
        </ul>

        {/* Back button */}
        <Button
         icon="pi pi-arrow-left"
          onClick={handleBackClick}
          label='Back'
          // style={{
          //   marginTop: '20px',
          //   padding: '10px 20px',
          //   backgroundColor: '#007bff',
          //   color: 'white',
          //   border: 'none',
          //   borderRadius: '5px',
          //   cursor: 'pointer',
          // }}
        >
         
        </Button>
      </Card>
    </div>
  );
}

export default UserProfile;
