import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const fromLoc=location.state?.from || "host"

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")

        try {
            const data = await loginUser(loginFormData)
            localStorage.setItem("isLoggedIn",true)
            setError(null)
            navigate(fromLoc,{replace:true})
        } catch (err) {
            setError(err)
        } finally {
            setStatus("idle")
        }

    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {
                location.state?.message &&
                <h3 className="login-error">WARNING: {location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {error?.message && (<h3 className="login-error">ERROR: {error.message}</h3>)}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button className="login-btn" disabled={status === "submitting"}>{status === "submitting" ? "Logging in" : "Log in"}</button>
            </form>
        </div>
    )

}