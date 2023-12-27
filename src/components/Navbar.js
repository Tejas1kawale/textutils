import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode!=='light'?props.mode:'light'} bg-${props.mode!=='light'?props.mode:'light'}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </li>
          
        </ul>
        <div className="cotainer mx-2">
          <svg className="mx-1"height="20" width="20">
              <circle  onClick={props.toggleModePink}cx="10" cy="10" r="10" fill="pink" />
            </svg>
        
          <svg className="mx-1" height="20" width="20">
            <circle  onClick={props.toggleModeGreen} cx="10" cy="10" r="10" fill="#4BF334 " />
          </svg>
          <svg className="mx-1" height="20" width="20">
            <circle onClick={props.toggleModeBlue} cx="10" cy="10" r="10" fill="#8D60F5" />
          </svg>
        
        </div>
       
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}   >
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeDark}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.dtext}</label>
        </div>
      </div>
    </div>
</nav>

  )
}

Navbar.prototype={
    title:PropTypes.string
};
Navbar.defaultProps={
    title:"Enter title here"
};