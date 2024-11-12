import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        { label: 'Home', icon: 'pi pi-home', command: () => navigate('/'), path: '/' },
        { label: 'Browser Router', icon: 'pi pi-globe', command: () => navigate('/browser-router'), path: '/browser-router' },
        { label: 'Memory Router', icon: 'pi pi-bookmark', command: () => navigate('/memory-router'), path: '/memory-router' },
        { label: 'Hash Router', icon: 'pi pi-hashtag', command: () => navigate('/hash-router'), path: '/hash-router' },
        { label: 'Nested Routes', icon: 'pi pi-sitemap', command: () => navigate('/nested-routes'), path: '/nested-routes' },
        { label: 'Dynamic Routes', icon: 'pi pi-cog', command: () => navigate('/dynamic-routes'), path: '/dynamic-routes' },
        { label: 'Protected Routes', icon: 'pi pi-lock', command: () => navigate('/protected-routes'), path: '/protected-routes' },
        { label: 'Redirects', icon: 'pi pi-arrow-right', command: () => navigate('/redirects'), path: '/redirects' },
    ];

    const menuItems = items.map(item => ({
        ...item,
        label: (
            <span style={{ color: location.pathname === item.path ? '#4f46e5' : 'inherit' }}>
                {item.label}
            </span>
        )
    }));

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: '#fff',
                boxShadow: '3px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Menubar model={menuItems} />
        </div>
    );
}

export default Navbar;
