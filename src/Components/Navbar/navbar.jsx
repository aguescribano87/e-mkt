import React from "react"
import "./navbar.css"
import {CartWidjet} from "../CartWidjet/CartWidjet"

function NavBar() {
    return (
        
        <nav className="navbar">
            <h1 className="logo">e-mkt</h1>
            <ul className="navbar-menu">
                <li>Inicio</li>
                <li>Productos</li>
                <li>¿Quines Somos?</li>
            </ul>
            <CartWidjet/>

        </nav>
    )
}

export {NavBar}