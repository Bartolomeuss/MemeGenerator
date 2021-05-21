import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg"
        }

    }
        render(){
            return(
                <div className="meme">
                    <h1>MEME Generator</h1>
                    <h2>{this.state.topText}</h2>
                    <img src={this.state.randomImage} alt="" />
                    
                </div>
                
            )
        }
}

export default MemeGenerator