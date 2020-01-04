import React from 'react'
import CardProject from '../CardProject'
import Stars from '../../image/stars.svg'
import { Container, Row, Col, Image} from 'react-bootstrap/'

export default class Portfolio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: []
        }
    }

    componentDidMount(){
        this.fetchData()
    }
    fetchData = async () => {
        let response = await fetch('/data')
        let data = await response.json()

        this.setState({data: data})

        console.log(this.state)
    }

    render(){
        return(    
            <React.Fragment>
                <Container fluid style={{margin: '0', padding: '0'}}>
                    <Row>
                        <Col xs={12} lg={12} md={12} sm={12} style={{backgroundColor:'black', height:'200px'}}>
                            <Image src={Stars} width={'100%'} height={'200px'} fluid  rounded/>
                        </Col> 
                        <Col xs={12} lg={12} md={12} sm={12} >
                            <h1 className="center" >Projects</h1>
                            <Row>
                                {this.state.data.map(item =>
                                    <Col xs={6} md={6} lg={4} sm={6} xs key={item.id}>
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