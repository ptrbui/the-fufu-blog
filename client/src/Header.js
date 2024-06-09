import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://the-fufu-blog.onrender.com/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, [setUserInfo]);

    function logout() {
        fetch('https://the-fufu-blog.onrender.com/logout', {
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
                    The Fufu
                    <div className="built-by">built by Peter Bui</div>
                </div>
                <div className="logo-container">
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
