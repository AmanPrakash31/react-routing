import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

function ProtectedRoutesPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLoginDialog, setShowLoginDialog] = useState(false); 
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState(''); 

    const toast = React.useRef(null); 
    const handleLogin = () => {
        if (password === 'admin') { 
            setIsAuthenticated(true);
            setShowLoginDialog(false); 
            toast.current.show({ severity: 'success', summary: 'Login Successful', detail: `Welcome ${username}!`, life: 3000 });
        } else {
            toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Incorrect password. Please try again.', life: 3000 });
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div className="flex justify-content-center p-flex-column" style={{ minHeight: '90vh', backgroundColor: '#f5f5f5' }}>
            <Toast ref={toast} />

            {isAuthenticated ? (
                <Card title="Protected Content" className="mb-4 mt-4" style={{ width: '40%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <h3>Welcome to the Protected Route, {username}!</h3> 
                    <p>Only authenticated users can see this content.</p>
                    <p>This is an example of a protected route where access is restricted until the user logs in.</p>

                    <h4>What Are Protected Routes?</h4>
                    <p>
                        Protected routes are routes that are accessible only by authenticated users. These routes can contain sensitive or private information, so it's important to ensure that only authorized users can access them.
                    </p>
                    <ul>
                        <li><strong>Example use cases:</strong> User dashboards, profile pages, admin panels, etc.</li>
                        <li><strong>How it works:</strong> Typically, you'll use an authentication state to control access to the route, either through session management, JWT tokens, or a context-based solution.</li>
                    </ul>

                    <h4>What Happens When You're Logged In?</h4>
                    <ul>
                        <li>You can view protected content like personalized data, settings, and other private sections of the app.</li>
                        <li>In real-world scenarios, you might be fetching sensitive user data from a server (e.g., profile details) that requires authentication.</li>
                    </ul>

                    {/* Button to log out */}
                    <Button label="Logout" icon="pi pi-sign-out" onClick={handleLogout} className="mt-3" />
                </Card>
            ) : (
                <Card title="Protected Routes" className="mb-4 mt-4" style={{ width: '40%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <h3>Access Restricted</h3>
                    <p>You need to be logged in to access this page.</p>

                    <h4>Why Login?</h4>
                    <p>
                        Logging in allows you to access personalized content, secure areas, and settings that are specific to your account. Without authentication, the system cannot identify who you are and what content you should have access to.
                    </p>

                    <h4>How Does Authentication Work?</h4>
                    <ul>
                        <li><strong>Login process:</strong> After entering your credentials (like username and password), the system verifies them and sets a token or session to remember your logged-in state.</li>
                        <li><strong>Session Management:</strong> React apps often use cookies, localStorage, or sessionStorage to persist authentication information.</li>
                    </ul>

                    <Button label="Login" icon="pi pi-sign-in" onClick={() => setShowLoginDialog(true)} className="mt-3" />
                </Card>
            )}

            <Dialog header="Login" visible={showLoginDialog} style={{ width: '30rem' }} onHide={() => {
                setShowLoginDialog(false);
                setPassword('');
                setUsername('');
            }}>
                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <InputText
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"

                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <InputText
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"

                        />
                    </div>

                    <div className="flex justify-content-center	mt-3 ">
                        <Button label="Cancel" icon="pi pi-times" onClick={() => setShowLoginDialog(false)} className="p-button-text mx-2" />
                        <Button className="mx-2" label="Login" icon="pi pi-sign-in" onClick={handleLogin} />
                    </div>

                </div>
            </Dialog>
        </div>
    );
}

export default ProtectedRoutesPage;
