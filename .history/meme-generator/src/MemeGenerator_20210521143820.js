import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    handleSubmit
        render(){
            return(
                
                    <div >
                        <form className="meme-form" onSubmit={this.handleSubmit}>
                            <input 
                                onChange={this.handleChange} 
                                type="text" 
                                name="topText" 
                                placeholder="top text"
                                value={this.state.topText}
                            />
                                
                            <input 
                                onChange={this.handleChange} 
                                type="text"
                                name="bottomText" 
                                placeholder="bottom text"
                                value={this.state.bottomText}
                            />
                                
                            <button>Gen</button>
                        </form>
                        <div className="meme">
                            <img src={this.state.randomImage} />
                            <h2 className="top">{this.state.topText}</h2>
                            <h2 className="bottom">{this.state.bottomText}</h2>
                        </div>
                    </div>
                    
              
                
            )
        }
}

export default MemeGenerator