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
                    <h2>One does not simply make a meme</h2>
                    <img src={this.state.randomImage} alt="" />
                    <h2>It creates it</h2>
                </div>
                
            )
        }
}

export default MemeGenerator