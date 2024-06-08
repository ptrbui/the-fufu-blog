import { useState } from "react";
import {Link, Navigate} from "react-router-dom";

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
            <p className="regPage">create a username:</p>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <p className="regPage">create a password:</p>
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
            <p className="regPage">
                <Link to="/About" className="regPageLink">
                    <span className="access-key-text">access key</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"/>
                    </svg>
                </Link>
            </p>
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
