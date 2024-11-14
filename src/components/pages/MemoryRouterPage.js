import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate, useLocation } from 'react-router-dom';

import MemoryRouterExample from './resource/MemoryRouter.gif';

function MemoryRouterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]
  )
  return (
    <div className="flex justify-content-center p-flex-column" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card title="Understanding MemoryRouter" className="mb-4 mt-4" style={{ width: '60rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <p>
          The <strong>MemoryRouter</strong> keeps the URL changes in memory rather than in the browser’s address bar. It manages the URL history in memory, so the user cannot use the browser’s back or forward buttons to navigate.
          This makes <strong>MemoryRouter</strong> especially useful for testing environments and non-browser contexts like React Native.
        </p>

        <h3>How MemoryRouter Works</h3>
        <p>
          Unlike <strong>BrowserRouter</strong> or <strong>HashRouter</strong>, <strong>MemoryRouter</strong> does not modify the browser's URL. Instead, it maintains navigation history internally, without showing the route in the browser's address bar.
        </p>

        <h4>Syntax</h4>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
          {`
import { MemoryRouter as Router } from 'react-router-dom';
          `}
        </pre>

        <h4>Example Usage</h4>
        <p>This example demonstrates the use of <strong>MemoryRouter</strong> to manage in-memory navigation:</p>
        <pre className="mb-4" style={{ backgroundColor: '#f7f7f7', padding: '10px', borderRadius: '5px' }}>
          {`
// Filename - App.js

import React, { Component } from "react";
import {
  MemoryRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
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
        <p>This GIF illustrates how routing works with <strong>MemoryRouter</strong>:</p>
        <img src={MemoryRouterExample} alt="MemoryRouter example GIF" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />

        <h4>Benefits of Using MemoryRouter</h4>
        <ul>
          <li><strong>No URL Modification:</strong> The URL in the address bar remains static, even when navigating between routes.</li>
          <li><strong>Ideal for Testing:</strong> It is perfect for unit tests where you want to simulate routing without actual URL changes.</li>
          <li><strong>Non-Browser Environments:</strong> Works well with React Native, Electron, or other environments where URL manipulation isn’t needed.</li>
        </ul>

        <h4>Limitations of MemoryRouter</h4>
        <p>
          The main limitation of <strong>MemoryRouter</strong> is that it doesn’t interact with the browser's URL bar. This means that:
        </p>
        <ul>
          <li><strong>Not Suitable for Production:</strong> Not ideal for web applications where users need to bookmark or share URLs.</li>
          <li>Browser back/forward buttons won’t work as expected since the URL remains unchanged.</li>
        </ul>

        <h4>When to Use MemoryRouter</h4>
        <ul>
          <li><strong>Testing:</strong> It is ideal for testing environments where actual URL changes are unnecessary.</li>
          <li><strong>Non-Web Platforms:</strong> Best for non-browser environments like React Native, where URL changes are not needed.</li>
          <li><strong>Single-Page Applications without URL dependency:</strong> Useful for SPAs where you don’t need to expose the route in the browser URL.</li>
        </ul>

        <Button label="Next: Learn about HashRouter" icon="pi pi-arrow-right" onClick={() => navigate('/hash-router')} />
      </Card>
    </div>
  );
}

export default MemoryRouterPage;
