import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [compra, setCompra] = useState([])
    

    const agregar = (buy)=> {
        const buscar = compra.find(comp => comp.id === buy.id)

        if (buscar === undefined) {
            setCompra([...compra, buy]) //Agrega un producto NO existente al carrito
        
        }else{ //Modifica un producto EXISTENTE
         const nuevaCompra = compra.map((rep)=>{
            if (rep.id === buy.id) {
                return{...rep, quantity: (parseInt(rep.quantity) + parseInt(buy.quantity))}
            }
            return rep
         }) 
         setCompra(nuevaCompra)  
        }
    }

    const removeItem = (item)=>{
        const newCart = compra.filter((comp)=> comp.id !== item.id)
        setCompra(newCart)
    }

    const clearCart = ()=> setCompra([])
    
    console.log (compra)
    return <CartContext.Provider value={{compra, agregar, removeItem, clearCart}}>
        {children}
        </CartContext.Provider>
}
