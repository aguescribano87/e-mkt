import React from "react"
import "./banner.css"
import bannerHome1 from "../../img/elite_accessories_banner.png"

export const Banner = ()=>{

    return (
        <div className="contenedor-banner">
            <img className="img-banner" src={bannerHome1} alt="foto-banner" />
        </div>
    )
}