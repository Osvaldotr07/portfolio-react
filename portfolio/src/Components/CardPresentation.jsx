import React  from 'react'
import {Card} from 'react-bootstrap/'
import image from '../image/Osvi.jpg'
import '../styles/Carousel.css'
import {FaHtml5, FaCss3, FaNodeJs, FaNode, FaPython, FaDocker} from 'react-icons/fa'
import {DiJavascript1, DiMongodb, DiReact, DiOpenshift} from 'react-icons/di'
import '../styles/CardPresentation.css'

export default function CardPresentation(props){
    return (
        <React.Fragment>
            <Card style={{width:'26rem', height: '100%'}} >
                <Card.Img  variant='top' src={image}/>
                <Card.Body>
                    <Card.Title>Who the hell is Osvaldo?</Card.Title>
                    <Card.Text>Hello everyone, My name Osvaldo Trejo, I am software developer fullstack with stack MERN. I like AI (Artificial Intelligence) and continue learning new things in technology </Card.Text>
                    <Card.Text>
                        I work at IBM like software developer FullStack
                    </Card.Text>
                    <Card.Title>Habilities</Card.Title>
                    <Card.Text>
                        <ul>
                            <li className="icon-styles"><FaHtml5 size={30} color={'orange'} className="icon-style-inside" />HTML</li>
                            <li className="icon-styles"> <FaCss3 size={25} color={'#0693E3'} className="icon-style-inside" /> CSS</li>
                            <li className="icon-styles"><DiJavascript1 size={30} color={'yellow'} className="icon-style-inside" />JavaScript</li>
                            <li className="icon-styles"><FaPython size={30} color={'green'} className="icon-style-inside" />Python</li>
                            <li className="icon-styles"><FaDocker size={30} color={'#0693E3'} className="icon-style-inside" />Docker</li>
                            <li className="icon-styles"><DiOpenshift size={30} color={'red'} className="icon-style-inside" />OpenShift</li>
                        </ul>
                    </Card.Text>
                    <Card.Title>Stack</Card.Title>
                    <Card.Text>
                        <ul>
                            <li className="icon-styles"><DiMongodb size={30} color={'green'} className="icon-style-inside" />MongoDB</li>
                            <li className="icon-styles"> <FaNodeJs size={25} color={'green'} className="icon-style-inside" />ExpressJS</li>
                            <li className="icon-styles"><DiReact size={30} color={'#0693E3'} className="icon-style-inside" />ReactJS</li>
                            <li className="icon-styles"><FaNode size={30} color={'green'} className="icon-style-inside" />NodeJS</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}
