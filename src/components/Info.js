import React from "react"
import DisplayPic from "../pics/profile.jpeg"

const handleAddToContacts = () => {
    window.location.href = `tel:+62-821`;
  };

export default function Info(props) {
    return (
        <nav className={`info--container ${props.darkMode ? "dark" : ""}`}>

            <img src={DisplayPic} alt="Display Picture" className="info--picture" />

            <a className="info--theme__icon" onClick={props.toggleDarkMode}>
                <ion-icon name="contrast-outline"></ion-icon>
            </a>

            <h1>Nathanael Brian</h1>

            <h4>Software Engineer</h4>

            <a href="https://wa.me/000" target="_blank" className="info--whatsapp__link">
                <span>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </span>
            </a>


            <a href="mailto: no-reply@gmail.com" target="_blank" className="info--email__link">
                <span>
                    <ion-icon name="mail-outline"></ion-icon>
                </span>
            </a>

            <a onClick={handleAddToContacts} className="info--phone">
            <span>
                    <ion-icon name="call-outline"></ion-icon>
                </span>
            </a>

        </nav>

    )
}

