import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

import {MdAndroid, MdBook, MdTagFaces} from 'react-icons/md'

export default function Navbar(){
    return(
        <React.Fragment>
            <div className="container-fluid navbar-container">
                <div className="row">
                    <div className="col-7 col-md-7 col-sm-7 col-xs-7 ">
                        <Link to="/" className="nav-link hero-title" >
                            @OsvaldoTrejo
                        </Link>
                    </div>
                    <div className=" col-md-5 col-lg-5 col-xs-5">
                        <ul className="nav nav-container">
                            <div className="container-fluid container-options">
                                <div className="row container-options">
                                    <div className="col-sm-4 options">
                                        <Link to="/portfolio" className="nav-link">
                                            <li className="nav-item navbar-title"><MdAndroid size={20}/> Portafolio</li>
                                        </Link>
                                    </div>
                                    <div className="col-sm-4 options">
                                        <Link to="/Skills" className="nav-link">
                                            <li className="nav-item navbar-title"><MdBook size={20}/> Skills</li>
                                        </Link>
                                    </div>
                                    <div className="col-sm-4 options">
                                        <Link to="/contact" className="nav-link">  
                                            <li className="nav-item navbar-title"><MdTagFaces size={20}/> Contact</li>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}