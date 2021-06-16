import './App.css';
import {NavBar} from "./Components/Navbar/navbar"
import {ItemListConteiner} from "./Components/ItemListConteiner/ItemListConteiner"

function App() {
  const greeting = "Bienvenidos a E-MARKET"
  
  return (
    <>
      <NavBar/>
      <ItemListConteiner saludo={greeting}/>
            
    </>
  );
}

export default App;
