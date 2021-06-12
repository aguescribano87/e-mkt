import React from "react"
import "./header.css"


export const Header = ()=>{
    return (
        <nav className="navbar">
            <ul className="navbar-containet">
                <li>Inicio</li>
                <li>Productos</li>
                <li>¿Quines Somos?</li>
            </ul>
        </nav>
    )
}