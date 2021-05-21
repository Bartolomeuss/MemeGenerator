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
                <h1>{this.state.test}</h1>
                <img src="{this.state.randomImage}" alt="" />
            )
        }
}

export default MemeGenerator