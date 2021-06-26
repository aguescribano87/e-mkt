import React from "react"

export const ItemDetail= ({item})=>{
    
    return(
        <div>
            <img src={item.pictureUrl} alt="foto" />
            <h2>${item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
        </div>
    )
}