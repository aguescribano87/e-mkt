import './App.css';
import {NavBar} from "./Components/Navbar/navbar"
import {ItemListConteiner} from "./Components/ItemListConteiner/ItemListConteiner"
import {ItemDetailContainer} from "./Components/ItemDetailContainer/ItemDetailContainer"

function App() {
  const greeting = "Bienvenidos a E-MARKET"
  const greeting2 = "Item Detail Container"

  return (
    <>
      <NavBar/>
      <ItemListConteiner saludo={greeting}/>
      <ItemDetailContainer saludo={greeting2}/>
            
    </>
  );
}

export default App;
