import React, {useContext, useState,} from "react"
import { dataBase } from '../../Firebase/firebase'
import {CartContext} from "../../Context/cartContext"
import "./checkOut.css"

export const CheckOut = ()=>{
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [mail, setMail] = useState()
    const {compra, clearCart, total} = useContext(CartContext)
    const db = dataBase

    const nuevaOrden = ()=>{
        db.collection("ordenes")
        .add({
            buyer:{name:name,phone:phone,mail:mail},
            fecha:new Date(),
            total: total,
            items:compra.map((i)=>{return{id:i.id, title:i.title, price:i.subTotal}})
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            clearCart()
            alctualizarStock()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
    }

    const alctualizarStock = ()=>{
        compra.map(i => db.collection("productos").doc(i.id)
            .update({stock:(i.stock-i.quantity)})
            .then(() => {
                console.log(`stock actualizado`)
            })
            .catch((error) => {
                console.error("Error al actualizar stock: ", error);
            })
            )
    }


    return (
        <>
        <p>Estas a un solo paso de FINALIZAR tu compra !!!</p>
            <div className="contedor-check">
            <div className="contenedor-usuario">
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Nombre" />
                <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Telefono" />
                <input onChange={(e)=>setMail(e.target.value)} type="mail" placeholder="Email" />
            </div>
            <div className="contenedor-compra">
            {compra.map(comp => 
                <div className="contenedor-items-compra">
                    <img className="img-compra" src={comp.pictureUrl} alt="foto" />
                    <p className="titulo-compra">{comp.title}</p>
                    <p>{`( ${comp.quantity} ) `}</p>
                    <p>{`$ ${comp.subTotal}`}</p>
                </div>
)
}          </div>
        </div >
            <p className="total-compra">Total: ${total}</p>
            <button className="boton-compra" onClick={()=>nuevaOrden()}>Finalizar Compra</button>

        </>
    )
}