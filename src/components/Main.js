import React from "react"

export default function Main(props) {
    return (
        <main className={`main--container ${props.darkMode ? "dark" : ""}`}>

            <div>
                <h3 className="main--title">About:</h3>
                <p className="main--text">I am a skilled software engineer with a passion for turning complex problems into innovative solutions. As a leader, I drive innovation and growth for my team while continuously seeking new challenges and opportunities to grow and make a positive impact.
                </p>
            </div>

            {/* <div className="main--images">
                <img src={latrobe} />
            </div> */}

            <p className="main--prompt__text">Let's Connect!</p>
            
        </main>
    )
}