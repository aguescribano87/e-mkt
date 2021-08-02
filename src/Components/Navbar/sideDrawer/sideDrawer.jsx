import React from "react"
import './sideDrawer.css'
import { Categorias } from '../../../Categorias'
import { NavLink } from "react-router-dom"

export const SideDrawer = ({ ClickHandler, sideDrawerOpen }) => {

    return (
        <nav>
            <ul className={sideDrawerOpen ? "sideDrawer open" : "sideDrawer"}>
                <h1>Categorias</h1>
                {Categorias.map((cat) =>
                (<NavLink to={`/category/${cat.toLocaleLowerCase()}`}>
                    <li onClick={ClickHandler} className="item-sideDrawer">{cat}</li>
                </NavLink>)
                )}

            </ul>
        </nav>
    )
}

