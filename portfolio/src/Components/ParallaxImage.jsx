import React from 'react'
import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'

export default class ParallaxImage extends React.Component{
    
    componentDidMount(){
       this.getAnimation()
    }

     getAnimation(){
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems)
    }
    render(){
        return(
            <React.Fragment>
                <div className="parallax-container">
                    <div className="parallax"><img src={this.props.firstImage} alt="hero"/></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">{this.props.description}</h2>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src={this.props.secondImage} alt="hero"/></div>
                </div>
                <div className="section white">
                    <div className="row container">
                            <h2 className="header">{this.props.secondDescription}</h2>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src={this.props.thirdImage} alt="hero"/></div>
                </div>
            </React.Fragment>
        )
    }
    
}