import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const loginStatus = localStorage.getItem("isLoggedIn")
    const location = useLocation()

    if (!loginStatus) {
        return (
            <Navigate
                to="/login"
                state={
                    { 
                        message: "You must log in first",
                        from: location.pathname
                    }
                }
                replace
            />)
    }
    return <Outlet />
}