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
        this.handleChange = this.handleChange.bind(this)
        
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImg: memes })
            })
    }
    handleChange(event){
        
    }
        render(){
            return(
                
                    <div >
                        <form className="meme-form">
                            <input 
                                onChange={this.handleChange} 
                                type="text" 
                                name="topText" 
                                placeholder="top text"
                                value={this.state.topText}
                            />
                                <br />
                            <input 
                                onChange={this.handleChange} 
                                type="text"
                                name="bottomText" 
                                placeholder="bottom text"
                                value={this.state.bottomText}
                            />
                                <br />
                            <button>Gen</button>
                        </form>
                    </div>
                    
              
                
            )
        }
}

export default MemeGenerator