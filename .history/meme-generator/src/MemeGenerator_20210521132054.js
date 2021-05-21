import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"One does not simply React",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allNewImgs: []
        }

    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImg: memes })
            })
    }
        render(){
            return(
                
                    <div className="meme-form">
                        <form>
                            <input type="text" name="topText" placeholder="top text"/>

                            <button>Gen</button>
                        </form>
                    </div>
                    
              
                
            )
        }
}

export default MemeGenerator