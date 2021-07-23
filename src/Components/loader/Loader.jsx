import React from "react"
import "./loader.css"

export const Loader = ({ load }) => <div className={`${load ? "loader-disabled" : "lds-ring"}`}><div></div><div></div><div></div><div></div></div>
