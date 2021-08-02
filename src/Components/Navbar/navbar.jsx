import React from "react"
import "./navbar.css"
import { CartWidget } from "../CartWidjet/CartWidget"
import { NavLink, Link } from "react-router-dom"
import { Categorias } from "../../Categorias"
import { DrawerToggleButton } from "./drawerToggleButton/drawerToggleButton"

export const NavBar = ({ClickHandler}) => {

    return (

        <nav className="navbar">
            <DrawerToggleButton ClickHandler={ClickHandler}/>
            <Link to="/">
                <h1 className="logo">e-mkt</h1>
            </Link>
            <ul className="menu">
                {Categorias.map((cat) =>
                (<NavLink to={`/category/${cat.toLocaleLowerCase()}`}>
                    <li className="item">{cat}</li>
                </NavLink>)
                )}
            </ul>

            <CartWidget />

        </nav>
    )
}

