import React from "react"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Main from "./components/Main"

export default function App() {

    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className={`page--background ${darkMode ? "dark" : ""}`}>

            <div className={`app--main__container ${darkMode ? "dark" : ""}`}>
                <Info 
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <Main darkMode={darkMode}/>
                <Footer 
                    darkMode={darkMode}
                />
            </div>
            
        </div>
    )
}