import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate, useLocation } from 'react-router-dom';
import HashRouterExample from './resource/HashRouter.gif';
function HashRouterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]

  )
  return (
    <div className="flex justify-content-center p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card title="Understanding HashRouter" className="mb-4 mt-4" style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

        <p>
          The <strong>HashRouter</strong> uses client-side hash routing to manage routes in React applications. It leverages the hash portion of the URL (i.e., <code>window.location.hash</code>) to synchronize your UI with the URL.
        </p>

        <h3>How HashRouter Works</h3>
        <p>
          HashRouter appends a hash symbol (#) followed by the route path in the URL, such as <code>http://example.com/#/about</code>. The server ignores anything after the hash, so it always returns the main index.html file without needing any server configuration.
        </p>

        <h4>Example Usage</h4>
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
        <h4>GIF Example</h4>
        <p>This GIF illustrates how navigation works with <strong>HashRouter</strong>:</p>
        <img src={HashRouterExample} alt="HashRouter example GIF" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
        <h4>Benefits of Using HashRouter</h4>
        <ul>
          <li><strong>No server configuration needed:</strong> The hash portion is handled client-side, so server setup is minimal.</li>
          <li><strong>Legacy browser support:</strong> HashRouter works with older browsers that may not support the HTML5 History API.</li>
          <li><strong>Single-page apps:</strong> HashRouter can be useful for SPAs where clean URLs aren’t required.</li>
        </ul>

        <h4>Limitations of HashRouter</h4>
        <ul>
          <li><strong>SEO limitations:</strong> Since search engines may not fully index hash-based routes, HashRouter is less ideal for SEO.</li>
          <li><strong>Not recommended for production:</strong> Due to SEO and user experience considerations, HashRouter is often avoided in production apps.</li>
        </ul>

        <Button label="Next: Learn about Dynamic Routes" icon="pi pi-arrow-right" onClick={() => navigate('/dynamic-routes')} />
      </Card>
    </div>
  );
}

export default HashRouterPage;
