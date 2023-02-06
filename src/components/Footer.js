import React from "react"

export default function Footer(props) {
    return (
        <div className={`footer--container ${props.darkMode ? "dark" : ""}`}>
            
            <a href="https://www.linkedin.com/in/nathanael-brian-b47a73165/" target="_blank" className="info--linkedin__link">
                <span>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span>LinkedIn</span>
            </a>

        </div>
    )
}