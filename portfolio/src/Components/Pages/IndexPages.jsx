import React from 'react'
import './styles/IndexPage.css'
import streetPrurple from '../../image/street-purple.jpg'
import code from '../../image/js.jpg'
import search from '../../image/machine_learning.jpg'
import ParallaxImage from '../ParallaxImage'


export default function IndexPage() {
    var description = "Hello, My name is Osvaldo and I am a software developer at IBM ❤️"
    var secondDescription = `I love AI and I like continues lerning new thing in technology, I speak English too 😁`
    return(
        <React.Fragment>
            <ParallaxImage 
                firstImage={streetPrurple} 
                secondImage={code} 
                thirdImage={search}
                description={description}
                secondDescription={secondDescription}/>
        </React.Fragment>
    )
}
