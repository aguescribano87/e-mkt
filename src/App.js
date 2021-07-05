import './App.css';
import {NavBar} from "./Components/Navbar/navbar"
import {ItemListConteiner} from "./Components/ItemListConteiner/ItemListConteiner"
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer"
import {Cart} from "./Components/cart/Cart"
import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


function App() {
 

  return (
    <Router>
      <>
        <NavBar />
        
        <Switch>
          <Route exact path="/">
            <ItemListConteiner />
          </Route>
          <Route path="/category/:id">
            <ItemListConteiner />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          
        </Switch>
      </>
    </Router>
    
  );
}

export default App;
