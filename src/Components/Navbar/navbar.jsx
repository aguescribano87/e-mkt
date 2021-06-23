import React from "react"
import "./navbar.css"
import {CartWidget} from "../CartWidjet/CartWidget"

function NavBar() {
    return (
        
        <nav className="navbar">
            <h1 className="logo">e-mkt</h1>
            <ul className="navbar-menu">
                <li>Inicio</li>
                <li>Productos</li>
                <li>¿Quines Somos?</li>
            </ul>
            <CartWidget/>

        </nav>
    )
}

export {NavBar}