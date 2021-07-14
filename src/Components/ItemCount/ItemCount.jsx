import React from "react"
import { useState } from "react"
import "./ItemCount.css"
import  remove  from "../../img/remove.png"
import  add  from "../../img/add.png"

export const ItemCount = ({stock,initial,onAdd})=>{
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
    
    return(
        <>
            <p className="cantidad">Stock: {stock}</p>
        <div className="itemCountConteiner">
            <img src={remove} alt="remove" onClick={restar} className="itemCountButton"/>
            <span className="itemCountSpan">{contador}</span>
            <img src={add} alt="add" onClick={sumar} className="itemCountButton"/>
        </div>

        <button onClick={()=>onAdd(contador)} className="btnAgregar">Agregar al Carrito</button>
        </>
        )
        
}