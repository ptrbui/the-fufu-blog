import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [accessKey, setAccessKey] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function register(ev) {
        ev.preventDefault();

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password, accessKey}),
            headers: { 'Content-Type': 'application/json' },
        });

        const errorData = await response.json();
        if (response.status === 200) {
            setErrorMessage('registration successful.');
            setRedirect(true);
        } else {
            if (errorData.message === 'username already exists.') {
                setErrorMessage(errorData.message);
            } else if (password !== retypePassword) {
                setErrorMessage('passwords do not match.');
            } else {
                setErrorMessage(errorData.message);
            }
        }
    }

    if (redirect) {
        return <Navigate to="/login" state={{ successMessage: 'registration successful! please log in.' }} />;
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <p className="regPage">Create a username:</p>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <p className="regPage">Create a password:</p>
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <input
                type="password"
                placeholder="re-type password"
                value={retypePassword}
                onChange={ev => setRetypePassword(ev.target.value)}
            />
            <p className="regPage">Access key:</p>
            <input
                type="text"
                placeholder="access-key" // New input for access-key
                value={accessKey}
                onChange={ev => setAccessKey(ev.target.value)}
            />
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            <button>Register</button>
        </form>
    );
}
