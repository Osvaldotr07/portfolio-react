import React, {useState, useEffect} from 'react'
import '../styles/Carousel.css'
import CardItem from './CardItem'
import {Col} from 'react-bootstrap'


function Carousel(props){
    const [state, setState ] = useState([])

    useEffect(() => {
        setState(props.data)
    })
    return(
        <React.Fragment>
            <div className="carousel__container">
                {state.map(item => 
                    <CardItem image={item.image}/>
                )}
            </div>
        </React.Fragment>
    )
}

export default Carousel