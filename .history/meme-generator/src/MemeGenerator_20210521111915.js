import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            test:"it worked"
        }

    }
        render(){
            return(
                <h1>{this.state.test}</h1>
            )
        }
}

export default MemeGenerator