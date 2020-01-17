import React from 'react'
import CardProject from '../CardProject'
import { Container, Row, Col} from 'react-bootstrap/'
import {connect} from 'react-redux'
import './styles/portfolio.css'
import * as projectsActions from '../../actions/projectsActions'
import Loader from '../Loader'
class Portfolio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
        }
    }
    componentDidMount(){
        this.props.traerTodos()
        setTimeout(() => {
            this.setState({loading: false})
        }, 1000)

        
    }
    render(){
        if(this.state.loading){
            return (
                <Loader />
            )
        }
        return( 
            <React.Fragment>
                <Container fluid style={{margin: '0', padding: '0'}}>
                    <Row>
                        <Col xs={12} lg={12} md={12} sm={12} className="portfolio__container" >
                            <h1 className="portfolio__title center" >Projects</h1>
                            <Row>
                                {this.props.projects.map(item =>
                                    <Col xs={6} md={6} lg={4} sm={6}  key={item.id}>
                                        <CardProject title={item.title} description={item.description} image={item.image} url={item.url}/>
                                    </Col>    
                                )}
                            </Row>
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

export default connect(mapStateToProps, projectsActions)(Portfolio)