import React from "react"
import "./navbar.css"
import {CartWidget} from "../CartWidjet/CartWidget"
import {NavLink, Link} from "react-router-dom"

function NavBar() {
    const categorias = ["Teclados","Mouses","Auriculares"]
    return (
        
        <nav className="navbar">
            <Link to="/">
            <h1 className="logo">e-mkt</h1>
            </Link>
            <ul className="menu">
                {categorias.map((cat)=>
                    (<NavLink to={`/category/${cat.toLocaleLowerCase()}`}>
                        <li className="item">{cat}</li>
                    </NavLink>)
                )}
                
            </ul>
            <CartWidget/>

        </nav>
    )
}

export {NavBar}