import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function HashRouterPage() {
  return (
    <div className="flex justify-content-center p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card title="Understanding HashRouter" className="mb-4 mt-4" style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <p>
          The <strong>HashRouter</strong> uses the URL hash (e.g., <code>#/home</code>) to manage routes. It is primarily used in applications where the browser's history API (like the one used in <strong>BrowserRouter</strong>) is not supported, or when you need a fallback for older browsers that may not support clean URLs.
        </p>

        <h3>How HashRouter Works</h3>
        <p>
          The <strong>HashRouter</strong> modifies the URL by appending a hash symbol (#) followed by the route path. For example, navigating to <code>#/about</code> will show the "About" page without reloading the browser. This method allows routes to work across different environments without server-side configuration.
        </p>
        <p>
          Unlike <strong>BrowserRouter</strong>, which requires the server to be aware of the URL paths, <strong>HashRouter</strong> can be used without any server configuration, as the URL hash is handled entirely on the client-side.
        </p>

        <h4>Example Usage</h4>
        <p>
          Here's how you can use the <strong>HashRouter</strong> in your React application:
        </p>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
{`
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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
            <li>The <code>HashRouter</code> is used to manage routing using the hash portion of the URL.</li>
            <li>The path will be appended after the <code>#</code> symbol in the browser’s address bar, e.g., <code>http://example.com/#/about</code>.</li>
            <li>Each <code>Route</code> corresponds to a specific URL pattern, and the route will be displayed based on that pattern.</li>
          </ul>
        </p>

        <h4>Benefits of Using HashRouter</h4>
        <ul>
          <li><strong>No server-side configuration:</strong> Unlike <code>BrowserRouter</code>, there is no need to configure the server to handle different routes since the hash is entirely client-side.</li>
          <li><strong>Works in legacy browsers:</strong> The hash-based routing mechanism is supported by all browsers, including older versions that may not support the HTML5 History API used by <code>BrowserRouter</code>.</li>
          <li><strong>Fallback for non-HTML5 environments:</strong> If your app doesn’t require clean URLs or if you're targeting older browsers, <strong>HashRouter</strong> is a great fallback.</li>
        </ul>

        <h4>Limitations of HashRouter</h4>
        <p>
          While <strong>HashRouter</strong> is useful in certain scenarios, there are some limitations:
        </p>
        <ul>
          <li><strong>SEO challenges:</strong> The URL hash (#) is not recognized by search engines in the same way that regular paths are. This can be an issue if you want your routes to be indexed by search engines.</li>
          <li><strong>Not suitable for production web apps:</strong> While <strong>HashRouter</strong> is great for demos and legacy support, for modern web apps, it is better to use <strong>BrowserRouter</strong> for clean URLs and better user experience.</li>
        </ul>

        <h4>Use Cases for HashRouter</h4>
        <p>
          <strong>HashRouter</strong> is ideal in the following situations:
        </p>
        <ul>
          <li><strong>Legacy browsers:</strong> When your application needs to work on older browsers that don’t support the HTML5 History API.</li>
          <li><strong>Single-page apps (SPAs):</strong> SPAs that don’t rely on the server to handle different routes, and where the URL hash can be used for navigation.</li>
          <li><strong>File-based deployment:</strong> When deploying to a static file server, where server-side routing cannot be configured for each URL path.</li>
        </ul>

        <h4>HashRouter with Navigation</h4>
        <p>
          You can use the <code>Link</code> component to create links for navigating between routes in a <strong>HashRouter</strong> setup:
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
          - <strong>HashRouter</strong> is great for use in situations where server-side routing is not possible or necessary.
          <br />
          - If you need SEO-friendly URLs and better browser compatibility, consider using <strong>BrowserRouter</strong> instead.
          <br />
          - The URL hash may not be ideal for long-term production apps, but it is a simple solution for many situations where you don’t need clean URLs.
        </p>

        <Button label="Next: Learn about Nested Routes" icon="pi pi-arrow-right" onClick={() => window.location.href = '/nested-routes'} />
      </Card>
    </div>
  );
}

export default HashRouterPage;
