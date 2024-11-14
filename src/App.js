import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import BrowserRouterPage from './components/pages/BrowserRouterPage';
import MemoryRouterPage from './components/pages/MemoryRouterPage';
import HashRouterPage from './components/pages/HashRouterPage';
import DynamicRoutesPage from './components/pages/DynamicRoutesPage';
import ProtectedRoutesPage from './components/pages/ProtectedRoutesPage';
import RedirectsPage from './components/pages/RedirectsPage';
import NotFound from './components/pages/NotFound';
import UserProfile from './components/pages/UserProfile';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Router>
        <Navbar />
        <div className="p-4 m-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browser-router" element={<BrowserRouterPage />} />
            <Route path="/memory-router" element={<MemoryRouterPage />} />
            <Route path="/hash-router" element={<HashRouterPage />} />
            <Route path="/dynamic-routes" element={<DynamicRoutesPage />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/protected-routes" element={<ProtectedRoutesPage />} />
            <Route path="/redirects" element={<RedirectsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
