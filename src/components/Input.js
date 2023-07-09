import './style.css'
import React from 'react'
import Header from './Header'
function Input(props){
    return(
        <div style={props.sty}>
            <Header
            style={props.style1}
            
            onClick={props.onClick}
            src={props.src}
            mode={props.mode}
            />
        <div className="inputs" style={props.style2}>
            <div className='one'>
                <input type="text"
                value={props.value}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                placeholder="Search for a country..."
                style={props.style}
                
                />
            </div>
            <div className="dropdown">
                <button className="dropdown-toggleitem item" style={props.style} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul className="dropdown-menu" style={props.style}>
                  <li style={props.style} onClick={props.onClick2} className="dropdown-item">Africa</li>

                  <li style={props.style} onClick={props.onClick3} className="dropdown-item">America</li>
                  <li style={props.style} onClick={props.onClick4} className="dropdown-item">Asia</li>
                  <li style={props.style} onClick={props.onClick5} className="dropdown-item">Europe</li>
                  <li style={props.style} onClick={props.onClick6} className="dropdown-item">Oceania</li>
                </ul>
            </div>
            
        </div>
        </div>
    )
}
export default Input