import React from "react"

export function Countries(props){
    return(
        
                <div style={props.style} className="ma" onClick={props.onClick}>
                <div>
                    <img className="mage" src={props.png} alt="image not found"/>
                </div>
                <div className="wi">
                    <h4>{props.name}</h4>
                </div>
                <div  className="wi">
                    <h5>Population: {props.population}</h5>
                    <h5>Region: {props.region}</h5>
                    <h5>Capital: {props.capital}</h5>
                </div>
            </div>
        
    )
}
