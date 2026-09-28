import { Link } from "react-router-dom";
import { useState } from "react";

import './Header.css'
import Hamburger from "../Hamburger/Hamburger.jsx";
import Navigation from "../NavigationLinks/Navigation.jsx";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <Link to='/'>
                            <img src="../../../icon.png" alt="Logo" className="logo-image"/>
                                <div className="title">
                                    ЗЕЛЕНИЯТ<span>КОМПАС</span>
                                </div>
                        </Link>
                    </div>
                    <Navigation isOpen={isOpen} />
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={isOpen}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}