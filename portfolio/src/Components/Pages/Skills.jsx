import React, {Component} from 'react'
import CardPresentation from '../CardPresentation'
import { Row, Col, Container } from 'react-bootstrap'
import './styles/Skills.css'
import Carousel from '../Carousel'
import {connect} from 'react-redux'
import * as actionsReducers from '../../actions/projectsActions'

class Skills extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.traerTodos()
    }

    render(){
        return(
            <React.Fragment >
                <Container fluid className="skills__container">
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <CardPresentation />
                        </Col>
                        <Col xs={9} sm={9} md={9} lg={9} xl={9}>
                            <Carousel data={this.props.projects}/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.projectReducers
}

export default connect(mapStateToProps, actionsReducers)(Skills)
