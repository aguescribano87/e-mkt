import { NavBar } from "./Components/Navbar/navbar"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./Components/cart/Cart"
import React, { useState } from "react"
import { BrowserRouter as Switch, Route } from "react-router-dom"
import { CheckOut } from "./Components/checkOut/checkOut"
import { SideDrawer } from "./Components/Navbar/sideDrawer/sideDrawer"
import { BackgroundSideDrawer } from "./Components/Navbar/backgroundSideDrawer/backgroundSideDrawer"

export const Routes = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerOpenClickHandler = () => setSideDrawerOpen(!sideDrawerOpen)

    return (
        <>
            <Switch>
                <NavBar ClickHandler={drawerOpenClickHandler} />
                <SideDrawer ClickHandler={drawerOpenClickHandler} sideDrawerOpen={sideDrawerOpen} />
                {sideDrawerOpen ?
                    <>
                        <BackgroundSideDrawer ClickHandler={drawerOpenClickHandler} />
                    </> : ""}
                <Route exact path="/" children={<ItemListContainer />} />
                <Route path="/category/:id" children={<ItemListContainer />} />
                <Route path="/item/:id" children={<ItemDetailContainer />} />
                <Route path="/cart" children={<Cart />} />
                <Route path="/checkout" children={<CheckOut />} />
            </Switch>


        </>
    )
}