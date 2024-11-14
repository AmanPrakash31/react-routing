import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate, useLocation } from 'react-router-dom';
import BrowserRouterExample from './resource/BrowserRouter.gif';
function BrowserRouterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]
  )
  return (
    <div className="flex justify-content-center p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card
        title="Understanding BrowserRouter"
        className="mb-4 mt-4"
        style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
      >
        <p>
          The <strong>BrowserRouter</strong> is one of the most commonly used routers in React applications.
          It uses the <strong>HTML5 History API</strong> (<code>pushState</code>, <code>replaceState</code>, and <code>popState</code>)
          to manage the URL and keep the UI in sync with the browser history.
          Unlike <code>HashRouter</code>, which uses hashes in the URL, <strong>BrowserRouter</strong> renders routes without hashes, providing clean, SEO-friendly URLs.
        </p>

        <h3>How BrowserRouter Works</h3>
        <p>
          When a user navigates to a different route, <strong>BrowserRouter</strong> updates the URL using the HTML5 History API.
          This means the server should handle all request URLs by returning the root <code>index.html</code> file for each route.
        </p>

        <h4>Force Refresh</h4>
        <p>
          <strong>BrowserRouter</strong> accepts a <code>forceRefresh</code> prop that allows navigation to trigger a full page refresh.
          This is useful for legacy browsers that don't support the HTML5 <code>pushState</code> API.
        </p>

        <h4>Example Syntax</h4>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
          {`
import { BrowserRouter as Router } from 'react-router-dom';
          `}
        </pre>

        <h4>Example Usage</h4>
        <p>This example demonstrates how to set up basic routing with <strong>BrowserRouter</strong> in a class component.</p>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
          {`
// Filename - App.js

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
          `}
        </pre>

        <h4>GIF Example</h4>
        <p>This GIF illustrates how navigation works with <strong>BrowserRouter</strong>:</p>
        <img src={BrowserRouterExample} alt="BrowserRouter example GIF" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />

        <h4>BrowserRouter Benefits</h4>
        <ul>
          <li><strong>Clean URLs:</strong> URLs do not contain hash symbols, which improves readability and user experience.</li>
          <li><strong>SEO-Friendly:</strong> Search engines can easily crawl URLs without hashes, improving SEO.</li>
          <li><strong>Modern Navigation:</strong> Smooth transitions between pages by using the HTML5 History API.</li>
        </ul>

        <h4>Limitations of BrowserRouter</h4>
        <p>
          The primary limitation of using <strong>BrowserRouter</strong> is the need for proper server configuration.
          The server should respond to all routes by returning the <code>index.html</code> file to avoid 404 errors on direct page refreshes.
          If this isn't possible, consider using <strong>HashRouter</strong> as a fallback.
        </p>

        <Button
          label="Next: Learn about Memory Router"
          icon="pi pi-arrow-right"
          onClick={() => navigate('/memory-router')}
        />
      </Card>
    </div>
  );
}

export default BrowserRouterPage;
