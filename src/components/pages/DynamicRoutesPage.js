import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function DynamicRoutesPage() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleClick = () => {
        // Navigate to the protected-routes page
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
                    Dynamic routes use URL parameters (also known as route parameters) to render different content based on the values provided in the URL. This allows you to create reusable templates where the content changes based on the dynamic data passed in the URL.
                </p>

                <h4>When to Use Dynamic Routes?</h4>
                <ul>
                    <li><strong>Personalized Content:</strong> For user-specific pages such as profile pages, dashboards, or articles.</li>
                    <li><strong>Reusable Components:</strong> When you want to load different data for the same component depending on the URL parameter.</li>
                    <li><strong>Handling Dynamic Data:</strong> For APIs where the data changes based on the input (e.g., displaying specific user data).</li>
                </ul>

                <h4>How Dynamic Routes Work</h4>
                <p>
                    You define a route that contains a dynamic segment in the path (e.g., <code>/user/:userId</code>). The dynamic part is represented by a colon followed by the parameter name (e.g., <code>:userId</code>).
                </p>
                <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
                    {`
<Route path="/user/:userId" element={<UserProfile />} />
`}
                </pre>

                <h4>Example: Implementing Dynamic Routes</h4>
                <p>
                    Below is an example that demonstrates how to define and render a dynamic route based on a parameter:
                </p>
                <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
                    {`
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<UserProfile />} />
    </Routes>
  );
}

function Home() {
  return <h2>Welcome to the homepage!</h2>;
}

function UserProfile() {
  const { userId } = useParams(); // Fetch userId from the URL
  return (
    <div>
      <h3>User Profile: {userId}</h3>
      <p>Here you can see user data for the ID: {userId}</p>
    </div>
  );
}
`}
                </pre>

                <h4>Explanation of the Example</h4>
                <ul>
                    <li>The route <code>/user/:userId</code> uses the <code>:userId</code> dynamic parameter, which can be accessed using the <code>useParams</code> hook inside the <code>UserProfile</code> component.</li>
                    <li>The <code>useParams</code> hook returns an object containing the route parameters. In this case, it provides the <code>userId</code> value from the URL.</li>
                    <li>When you navigate to <code>/user/123</code>, the <code>UserProfile</code> component will display "User Profile: 123" and dynamically load content related to that user.</li>
                </ul>

                <h4>Benefits of Using Dynamic Routes</h4>
                <ul>
                    <li><strong>Efficient Data Fetching:</strong> Instead of creating separate routes for every user or item, you can use dynamic routes to handle all cases with a single template.</li>
                    <li><strong>Improved Performance:</strong> Dynamic routes allow you to load specific data only when necessary, reducing unnecessary re-renders or requests.</li>
                    <li><strong>Scalable Routing:</strong> You can add more dynamic routes without changing the structure of your application, making it more scalable and flexible.</li>
                </ul>

                <h4>Real-world Use Cases for Dynamic Routes</h4>
                <ul>
                    <li><strong>User Profiles:</strong> A common use case is displaying different user profiles based on the user's unique ID in the URL, such as <code>/user/123</code>.</li>
                    <li><strong>Product Details:</strong> In e-commerce websites, each product page can be dynamically loaded based on a product ID in the URL, such as <code>/product/567</code>.</li>
                    <li><strong>Blog Posts:</strong> For blogs, each post can be loaded based on the unique post ID, like <code>/post/:postId</code>.</li>
                </ul>

                <h4>Important Notes</h4>
                <ul>
                    <li>The dynamic parameter name in the URL (e.g., <code>:userId</code>) should match the name you use in the <code>useParams</code> hook.</li>
                    <li>When you need to navigate programmatically to a dynamic route, use the <strong>Navigate</strong> component or the <strong>useNavigate</strong> hook.</li>
                </ul>

                {/* Update the button to navigate to /protected-routes */}
                <Button label="Go to Protected Routes" icon="pi pi-arrow-right" onClick={handleClick} />
            </Card>
        </div>
    );
}

export default DynamicRoutesPage;
