import React from 'react'
import '../styles/Footer.css'
import { DiReact } from 'react-icons/di'
import {IoLogoInstagram} from 'react-icons/io'
import { FaLinkedinIn, FaGithub} from 'react-icons/fa'

export default function Footer(){
    return(
        <React.Fragment>
            <div className="container-fluid container-footer">
                <div className="row container-footer">
                    <div className="col-3 col-sm-4 col-md-5 col-lg-5">
                        <h3 className="title-footer">@Copyright2019</h3>
                    </div>
                    <div className="col-4 col-sm-4 col-md-5 col-lg-5">
                        <h3 className="title-footer">This app was made with Reactjs <DiReact size={30} color={'#0693E3'} /></h3>
                    </div>
                    <div className="col-5 col-sm-4 col-md-2 col-lg-2">
                        <a href="https://www.instagram.com/osvaldocrew/?hl=es-la" target="_blank" className="mr-1" rel="noopener noreferrer">
                            <IoLogoInstagram size={30} color={'#FD1D1D'}/>
                        </a>
                        <a href="https://www.linkedin.com/in/osvaldo-trejo-76675a101/" target="_blank" className="mr-1" rel="noopener noreferrer">
                            <FaLinkedinIn size={30} color={'#0693E3'}/>
                        </a>
                        <a href="https://github.com/Osvaldotr07" target="_blank" className="mr-1" rel="noopener noreferrer">
                            <FaGithub size={30} color={'white'} />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} 
