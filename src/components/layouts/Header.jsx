import React from "react"
import { Link, NavLink, replace, useNavigate } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa"

export default function Header() {
    const navigate = useNavigate()
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogout() {
        localStorage.removeItem("isLoggedIn")
        navigate("/login",{replace:true})
    }
    
    return (
        <header>
            <Link className="site-logo" to="/"><img src="/vanlife-logo.png" alt="vanlife-logo" /></Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <FaRegUserCircle size={28} className="login-icon" />
                </Link>
                <button className="logout" onClick={fakeLogout}>Logout</button>
            </nav>
        </header>
    )
}