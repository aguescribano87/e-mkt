import React from "react"


export const Item = ({items})=>{

    
    
    return (
        <div>
            <img src={items.pictureUrl} alt="foto" />
            <h2>cod:{items.id} {items.title}</h2>
            <p>${items.price}</p>
        </div>
    )
}