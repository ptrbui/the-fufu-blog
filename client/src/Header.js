import {Link, Navigate, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import blogIcon from './media/fufu-icon.png';
import circle from './media/circle.png';
import triangle from './media/triangle.png';
import square from './media/square.png';


export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        }).then(() => {
            setUserInfo(null);
            navigate('/'); // Redirect to the home page after logout
        });
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo">
                <div className="fufu-name">
                    The Fufu Blog
                    <div className="built-by">built by Peter Bui</div>
                </div>
                <div className="logo-container">
                    {/* <img className="icon circle" src={circle}/> */}
                    {/* <img className="icon triangle" src={triangle}/> */}
                    {/* <img className="icon square" src={square}/> */}
                </div>

            </Link>
            <nav>
                {username && (
                    <>
                        <Link to="/About">about</Link>
                        <Link to='/create'>create post</Link>
                        <a onClick={logout}>logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/About">about</Link>
                        <Link to="/login">login</Link>
                        <Link to="/register">register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}
