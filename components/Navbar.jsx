import { Navbar } from "flowbite-react"
import react from "react"

export const NavigationBar = () => {
    return (
        <div style={{ height: "15vh", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <div className="logo">
                <img width="250" src="wordmark-logo.svg" alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", gap: 50, width: "40%" }} className="links">
                <p style={{ fontSize: 22 }}>Features</p>
                <p style={{ fontSize: 22 }}>Docs</p>
            </div>
        </div>
    )
}