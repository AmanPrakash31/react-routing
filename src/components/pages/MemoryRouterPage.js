import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
function MemoryRouterPage() {
  const navigate = useNavigate();
// const location = useLocation();
  return (
    <div className=" flex justify-content-center p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card title="Understanding MemoryRouter" className="mb-4 mt-4" style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <p>
          The <strong>MemoryRouter</strong> is a router in React that keeps track of history in memory, instead of using the browser's address bar. It does not modify the URL in the browser, making it suitable for use cases where you do not want or need to show the URL to the user, such as in testing environments or non-browser-based environments (e.g., React Native).
        </p>

        <h3>How MemoryRouter Works</h3>
        <p>
          Unlike <strong>BrowserRouter</strong> or <strong>HashRouter</strong>, <strong>MemoryRouter</strong> does not rely on the browser's URL to manage navigation. Instead, it keeps track of the history in memory. This means that it won’t modify the actual URL displayed in the address bar.
        </p>
        <p>
          It is most commonly used for scenarios such as testing or when building apps that are not running in a traditional web browser (e.g., React Native or Electron). When you navigate to different routes, the <code>MemoryRouter</code> updates its internal history state but does not affect the browser’s URL.
        </p>

        <h4>Example Usage</h4>
        <p>
          Here’s how you can use the <strong>MemoryRouter</strong> in your application:
        </p>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
{`
import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}

export default App;
`}
        </pre>
        <p>
          In this example:
          <ul>
            <li>We are using <code>MemoryRouter</code> instead of <code>BrowserRouter</code> to manage the navigation.</li>
            <li>It’s important to note that the URL will not change when navigating between routes.</li>
            <li>The internal history is managed in memory, meaning that the state persists only during the lifetime of the app.</li>
          </ul>
        </p>

        <h4>Benefits of Using MemoryRouter</h4>
        <ul>
          <li><strong>No URL Modification:</strong> The URL in the address bar will not change when navigating between routes.</li>
          <li><strong>Suitable for Testing:</strong> It is ideal for unit testing or when you do not need real URL changes.</li>
          <li><strong>Non-Browser Environments:</strong> Perfect for environments like React Native, Electron, or testing frameworks where URL manipulation isn’t possible or necessary.</li>
        </ul>

        <h4>Limitations of MemoryRouter</h4>
        <p>
          The main limitation of <strong>MemoryRouter</strong> is that it doesn’t allow for direct interaction with the browser's URL bar. This means that:
        </p>
        <ul>
          <li><strong>Cannot be used for production web apps</strong> where you want users to be able to bookmark, share, or reload specific pages.</li>
          <li>Since the URL is not updated, users cannot use browser features like the back and forward buttons to navigate between routes.</li>
        </ul>

        <h4>Use Cases for MemoryRouter</h4>
        <p>
          <strong>MemoryRouter</strong> is not typically used in production web applications but is great for certain use cases:
        </p>
        <ul>
          <li><strong>Testing:</strong> It is commonly used in unit tests or integration tests where URL changes are not needed and you only care about routing logic.</li>
          <li><strong>Non-Web Platforms:</strong> Ideal for platforms like React Native, Electron, or other environments that don’t need to manipulate the browser's address bar.</li>
          <li><strong>Single-Page Applications (SPAs) without URL state:</strong> When building apps where navigation happens in memory and you don’t need to expose the current state in the URL.</li>
        </ul>

        <h4>MemoryRouter with Navigation</h4>
        <p>
          Even though <strong>MemoryRouter</strong> doesn't change the URL, you can still use navigation features such as <code>Link</code> or <code>Navigate</code> for route transitions.
        </p>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
{`
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
`}
        </pre>

        <h4>Important Notes</h4>
        <p>
          - Use <strong>MemoryRouter</strong> in scenarios where URL state and browser features are not necessary, such as in tests or non-browser environments.
          <br />
          - If you're building a traditional web app, you will likely need to use <strong>BrowserRouter</strong> or <strong>HashRouter</strong> instead.
          <br />
          - Make sure to test any router-based logic thoroughly, especially if you plan to move the app to a production environment later.
        </p>

        <Button label="Next: Learn about HashRouter" icon="pi pi-arrow-right" onClick={() => navigate('/hash-router') } />
      </Card>
    </div>
  );
}

export default MemoryRouterPage;
