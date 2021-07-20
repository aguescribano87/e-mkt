import './App.css';
import {NavBar} from "./Components/Navbar/navbar"
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer"
import {Cart} from "./Components/cart/Cart"
import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {CheckOut} from "./Components/checkOut/checkOut"

function App() {
 

  return (
    <Router>
      <>
        <NavBar />
        
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </>
    </Router>
    
  );
}

export default App;
