import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NestedRoutesPage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-content-center p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card title="Nested Routes Example" className="mb-4 mt-4" style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <p>
          <strong>Nested Routes</strong> allow you to nest one route inside another, enabling a deeper and more flexible routing structure in your React application.
        </p>

        <h3>What are Nested Routes?</h3>
        <p>
          In React Router, <strong>nested routes</strong> refer to routes that are defined inside other routes. This allows for complex, hierarchical navigation where the content of one route can contain child routes. Nested routes are ideal for building layouts or pages that contain sections or sub-pages.
        </p>

        <h4>When to Use Nested Routes?</h4>
        <ul>
          <li><strong>Complex Layouts:</strong> When you need to show different content within different parts of the page.</li>
          <li><strong>Tabbed Interfaces:</strong> For creating tabbed sections where each tab is a nested route.</li>
          <li><strong>Hierarchical Pages:</strong> For structuring pages that have parent-child relationships, like an admin dashboard with subpages.</li>
        </ul>

        <h4>How Nested Routes Work</h4>
        <p>
          Nested routes work by defining routes within the parent route. The parent route renders its child route based on the URL path. You can define multiple levels of nested routes if necessary.
        </p>

        <h4>Example: Implementing Nested Routes</h4>
        <p>
          Below is an example that demonstrates how to define and render nested routes in React Router:
        </p>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
{`
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Parent route with nested routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="overview" element={<DashboardOverview />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  );
}

// Components for each route
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function DashboardLayout() {
  return (
    <div>
      <h3>Dashboard Layout</h3>
      {/* Render child route here */}
      <Outlet />
    </div>
  );
}

function DashboardOverview() {
  return <h4>Dashboard Overview</h4>;
}

function DashboardSettings() {
  return <h4>Dashboard Settings</h4>;
}
`}
        </pre>

        <h4>Explanation of the Example</h4>
        <ul>
          <li>The route <code>/dashboard</code> acts as the parent route.</li>
          <li>The <code>DashboardLayout</code> component is rendered at <code>/dashboard</code>, and it includes an <code>Outlet</code> component to render child routes.</li>
          <li>There are two child routes of <code>/dashboard</code>: <code>/dashboard/overview</code> and <code>/dashboard/settings</code>.</li>
          <li>When the user navigates to <code>/dashboard/overview</code>, the <code>DashboardOverview</code> component is rendered inside the <code>DashboardLayout</code>.</li>
          <li>This is an example of how nested routes can create a dynamic and flexible layout, where the layout changes depending on which nested route is active.</li>
        </ul>

        <h4>Benefits of Using Nested Routes</h4>
        <ul>
          <li><strong>Better Organization:</strong> Nested routes allow you to keep related routes together in a hierarchical structure, improving the organization of your codebase.</li>
          <li><strong>Modular Layouts:</strong> Nested routes make it easier to build modular layouts, where each part of the layout can be reused or updated independently.</li>
          <li><strong>Improved User Experience:</strong> They allow you to manage different sections of a page (e.g., sidebars, tabs, content areas) without having to reload the entire page.</li>
        </ul>

        <h4>Real-World Use Cases for Nested Routes</h4>
        <ul>
          <li><strong>Admin Dashboards:</strong> Admin panels often have complex layouts with nested sections like Overview, Settings, and Reports, each with its own sub-sections.</li>
          <li><strong>Tabbed Interfaces:</strong> Websites and apps with tabbed navigation can use nested routes to display different content in the same area based on the selected tab.</li>
          <li><strong>E-commerce Sites:</strong> Product details pages, where the main page has tabs for product description, reviews, and related products, each of which can be a nested route.</li>
        </ul>

        <h4>Important Notes</h4>
        <ul>
          <li>The <strong>Outlet</strong> component is used to render the matched child route inside the parent component.</li>
          <li>Nested routes can be defined with any level of depth, allowing you to create complex, multi-level routing structures.</li>
          <li>Make sure to handle navigation between nested routes appropriately using <strong>Link</strong> or <strong>Navigate</strong> components to allow seamless transitions.</li>
        </ul>

        <Button label="Next: Dynamic Routes" icon="pi pi-arrow-right" onClick={() => navigate('/dynamic-routes')} />
      </Card>
    </div>
  );
}

export default NestedRoutesPage;
