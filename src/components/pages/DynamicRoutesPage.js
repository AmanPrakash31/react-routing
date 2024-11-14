import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function DynamicRoutesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]

    )

    const handleClick = () => {
        navigate('/protected-routes');
    };

    return (
        <div className="flex justify-content-center p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Card title="Dynamic Routes Example" className="mb-4 mt-4" style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <p>
                    <strong>Dynamic Routes</strong> allow you to create routes with dynamic parameters (e.g., <code>/user/:userId</code>) that can load specific data based on the URL.
                </p>

                <h3>What are Dynamic Routes?</h3>
                <p>
                    Dynamic routes use URL parameters (also known as route parameters) to render different content based on the values provided in the URL.
                </p>

                <h4>Example Usage</h4>
                <p>
                    Here’s how you can set up a dynamic route for user profiles with different <code>userId</code> values:
                </p>
                <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
                    {`
import { Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<UserProfile />} />
    </Routes>
  );
}

function UserProfile() {
  const { userId } = useParams(); 
  return <h3>User Profile: {userId}</h3>;
}
`}
                </pre>

                <h4>Navigate to Dynamic Routes</h4>
                <p>Click on a user below to view their profile:</p>

                <div className="flex justify-content-center align-items-center gap-3">
                    <Link to="/user/1">
                        <Button label="User 1" icon="pi pi-user" className="p-button-outlined" />
                    </Link>
                    <Link to="/user/2">
                        <Button label="User 2" icon="pi pi-user" className="p-button-outlined" />
                    </Link>
                    <Link to="/user/3">
                        <Button label="User 3" icon="pi pi-user" className="p-button-outlined" />
                    </Link>
                </div>


                <h4>Explanation of Dynamic Routes</h4>
                <ul>
                    <li>The <code>/user/:userId</code> route uses <code>:userId</code> as a dynamic parameter to render specific data based on the URL.</li>
                    <li><code>useParams</code> extracts the <code>userId</code> to display the corresponding profile or data.</li>
                </ul>

                <h4>Benefits of Dynamic Routes</h4>
                <ul>
                    <li><strong>Reusable Components:</strong> One component can handle multiple cases (e.g., different user profiles).</li>
                    <li><strong>Efficient Data Fetching:</strong> Fetch data based on the URL parameter.</li>
                    <li><strong>Scalability:</strong> Easily add new routes without changing the structure.</li>
                    <li><strong>Cleaner Code:</strong> Reduce duplication and maintainability by using a single template.</li>
                </ul>

                <h4>Limitations of Dynamic Routes</h4>
                <ul>
                    <li><strong>Increased Complexity:</strong> More parameters can complicate routing logic.</li>
                    <li><strong>SEO Challenges:</strong> Dynamic content may be hard for search engines to crawl.</li>
                    <li><strong>Potential Errors:</strong> Incorrect handling of parameters can lead to errors.</li>
                    <li><strong>State Management Issues:</strong> Async data fetching can complicate state management.</li>
                </ul>

                <Button label="Go to Protected Routes" icon="pi pi-arrow-right" onClick={handleClick} />
            </Card>
        </div>
    );
}

export default DynamicRoutesPage;
