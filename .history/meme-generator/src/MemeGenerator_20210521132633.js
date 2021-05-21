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
        handleChange()
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
                
                    <div >
                        <form className="meme-form">
                            <input onChange={handleChange} type="text" name="topText" placeholder="top text"/>
                            <br />
                            <input onChange={handleChange}  type="text" name="bottomText" placeholder="bottom text"/>
                            <br />
                            <button>Gen</button>
                        </form>
                    </div>
                    
              
                
            )
        }
}

export default MemeGenerator