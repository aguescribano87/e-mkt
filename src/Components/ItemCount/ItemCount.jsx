import React from "react"
import { useState } from "react"
import "./ItemCount.css"

export const ItemCount = ({stock,initial})=>{
    const [contador, setContador] = useState(initial)
    const [nuevoStock, setNuevoStock] =useState(stock)

    function sumar(){
        
        if(nuevoStock !== 1){
            setContador(parseInt(contador) + 1)
            setNuevoStock(parseInt(nuevoStock) - 1)
        }
    }
           
    function restar(){
        if(contador > 1){
            setContador(parseInt(contador) - 1)
            setNuevoStock(parseInt(nuevoStock) + 1)
        }

    }   
    
    function agregar(){
        alert(`Se agregaron ${contador} productos al carrito`)
    }

    return(
        <div>

        <div className="itemCountConteiner">
            <button onClick={restar} className="itemCountButton">-</button>
            <span className="itemCountSpan">{contador}</span>
            <button onClick={sumar} className="itemCountButton">+</button>
        </div>

        <button onClick={agregar} className="btnAgregar">Agregar al Carrito</button>
        </div>
        )
        
}