import logo from "./assets/Logo.png";
import './Navbar.css'
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if userId is present in local storage to determine login status
        const userId = localStorage.getItem('userId');
        setIsLoggedIn(!!userId);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId'); // Remove user ID
        setIsLoggedIn(false);
        navigate('/login'); // Redirect to login page after logout
    };
    return (
        <header className="home-header">


            <nav>
                <ul>
                    <li>
                        <Link to='/'  className="home-nav-link">Home Page</Link>
                    </li>
                    <li>
                        <a href="#" className="home-nav-link">Rent Vehicles</a>
                        <ul className="dropdown">
                            <li><Link to='/bike' className="home-nav-link">Bike Rental</Link></li>
                        </ul>
                    </li>



                </ul>
            </nav>
            <div className="home-auth">
                {isLoggedIn ? (
                    <button className="home-Logout" onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to='/login'>
                        <button className="home-Logout">Logout</button>
                    </Link>
                )}
            </div>
        </header>
    );
};
export default Navbar;