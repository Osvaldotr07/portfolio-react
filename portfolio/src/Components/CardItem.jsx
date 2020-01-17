import React from 'react'
import '../styles/Carousel.css'
import {Image} from 'react-bootstrap'
import image from '../image/blur-close.jpg'

export default function CardItem(props){
    return(
        <React.Fragment>
            <div className="carousel__item">
                <Image src={ props.image } height={350} width={300}  className="carousel--img"/>
            </div>
        </React.Fragment>
    )
}