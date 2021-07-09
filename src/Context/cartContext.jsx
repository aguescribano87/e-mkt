import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [compra, setCompra] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadItems, setCantidadItems] = useState(0)

    const agregar = (buy)=> {
        const buscar = compra.find(comp => comp.id === buy.id)

        if (buscar === undefined) {
            setCompra([...compra, buy]) //Agrega un producto NO existente al carrito
        
        }else{ //Modifica un producto EXISTENTE
         const nuevaCompra = compra.map((rep)=>{
            if (rep.id === buy.id) {
                return{...rep, 
                            quantity: (parseInt(rep.quantity) + parseInt(buy.quantity)),
                            subTotal: (rep.subTotal + buy.subTotal)
                            }
            }
            return rep
         }) 
         setCompra(nuevaCompra)  
        }
        setTotal(total + buy.subTotal)
        setCantidadItems(cantidadItems + buy.quantity)
    }
    
    const removeItem = (item)=>{
        const newCart = compra.filter((comp)=> comp.id !== item.id)
        setCompra(newCart)
        setTotal(total - item.subTotal)
        setCantidadItems(cantidadItems - item.quantity)
    }

    const clearCart = ()=>{
        setCompra([]) 
        setTotal(0)
        setCantidadItems(0)
    } 
        
    
    return <CartContext.Provider value={{compra, agregar, removeItem, clearCart, total, cantidadItems}}>
        {children}
        </CartContext.Provider>
}
