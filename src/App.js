import './App.css';
import { NavBar } from "./Components/Navbar/navbar"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { Cart } from "./Components/cart/Cart"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CheckOut } from "./Components/checkOut/checkOut"
import { Page404 } from "./Components/page404/page404"


function App() {


  return (
    <Router>
      <>
        <NavBar />

        <Switch>
          <Route exact path="/" children={<ItemListContainer />} />
          <Route path="/category/:id" children={<ItemListContainer />} />
          <Route path="/item/:id" children={<ItemDetailContainer />} />
          <Route path="/cart" children={<Cart />} />
          <Route path="/checkout" children={<CheckOut />} />
          <Route path="*" children={<Page404 />} />
        </Switch>
      </>
    </Router>

  );
}

export default App;
