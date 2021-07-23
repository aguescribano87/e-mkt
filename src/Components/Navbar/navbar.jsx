import React from "react"
import "./navbar.css"
import {CartWidget} from "../CartWidjet/CartWidget"
import {NavLink, Link} from "react-router-dom"

export const categorias = ["Teclados","Mouses","Auriculares"]
export const NavBar = ()=> {
    
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

