import React from 'react'
import {Card, Button} from 'react-bootstrap/'
import '../styles/Carousel.css'

export default function CardProject(props){
    return(
        <React.Fragment>
            <Card style={{width: '100%'}}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <a href={props.url} rel="noopener noreferrer" target="_blank"> 
                        <Button variant="secondary" active>Go on</Button>
                    </a>
                </Card.Body>
                
            </Card>
        </React.Fragment>   
    )
}