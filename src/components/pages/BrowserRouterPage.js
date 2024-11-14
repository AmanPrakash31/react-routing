import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


function BrowserRouterPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-content-center	  p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card
        title="Understanding BrowserRouter"
        className="mb-4 mt-4" style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <p>
          The <strong>BrowserRouter</strong> is one of the most commonly used routers in React applications.
          It uses the <strong>HTML5 History API</strong> to manage the session history and keep the URL clean.
          Unlike the other routers like <code>HashRouter</code>, which relies on a hash in the URL, <strong>BrowserRouter</strong> renders routes without any hash marks, which makes URLs more user-friendly and SEO-friendly.
        </p>

        <h3>How BrowserRouter Works</h3>
        <p>
          The <strong>BrowserRouter</strong> relies on the browser's history to track the navigation state.
          When a user clicks a link or navigates to a different route, the <code>BrowserRouter</code> pushes the new URL to the history stack.
          The browser then matches the URL with the appropriate route.
        </p>

        <h4>Example Usage</h4>
        <p>
          Here's how you can set up a basic routing system with <strong>BrowserRouter</strong>.
        </p>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
          {`
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            <li>The <code>BrowserRouter</code> is wrapping the entire application to provide routing functionality.</li>
            <li>The <code>Routes</code> component holds all the <code>Route</code> elements.</li>
            <li>The <code>Route</code> component defines the URL path and the corresponding component to render when that path is matched.</li>
          </ul>
        </p>

        <h4>Benefits of Using BrowserRouter</h4>
        <ul>
          <li><strong>Clean URLs:</strong> It doesn't add a '#' symbol in the URL, so the URL structure remains clean and user-friendly.</li>
          <li><strong>Better for SEO:</strong> Since the URL doesn't contain hashes, search engines can crawl your site more effectively.</li>
          <li><strong>Modern Navigation:</strong> Provides smooth transitions between pages using the HTML5 History API.</li>
        </ul>

        <h4>Limitations of BrowserRouter</h4>
        <p>
          The primary limitation of using <strong>BrowserRouter</strong> is that it requires proper server-side configuration.
          When you refresh a page or directly visit a URL, the server must be able to return the correct HTML page for the requested route.
          Without this configuration, users may encounter 404 errors for routes other than the root page ("/").
        </p>
        <p>
          If your web server is not configured to handle React Router correctly, you might want to use <strong>HashRouter</strong> as a fallback.
        </p>

        <h4>BrowserRouter with Navigation</h4>
        <p>
          To make navigation between pages more interactive, we can use the <code>Link</code> component from <strong>react-router-dom</strong> to create navigation links.
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
)
`}
        </pre>

        <h4>Important Notes</h4>
        <p>
          - Always wrap your routes in the <code>BrowserRouter</code> component.
          <br />
          - Use <code>Routes</code> instead of <code>Switch</code> in React Router v6 and above.
          <br />
          - Don't forget to properly handle routing on the server if you're deploying your React app with clean URLs.
        </p>

        <Button label="Next: Learn about Memory Router" icon="pi pi-arrow-right" onClick={() => navigate('/memory-router')} />
      </Card>
    </div>
  );
}

export default BrowserRouterPage;
