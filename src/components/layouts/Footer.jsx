import React from "react"

export default function Footer() {
    const date = new Date().getFullYear()

    return (
        <footer>
            &copy; {date} All Copyrights reserved by{" "} <i>#VANLIFE</i>
        </footer>
    )
}
