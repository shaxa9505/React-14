import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super();
        this.state = {
            card: "",
            cv: "",
            name: "",
        }
        this.cardRef = React.createRef();
        this.cvRef = React.createRef();
        this.nameRef = React.createRef();
    }

    changeClick = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            if(this.state.card.length === 16){
                this.cvRef.current.focus()
            }
            if(this.state.cv.length === 3){
                this.nameRef.current.focus();
            }
        })
    }

    componentDidMount() {
        this.cardRef.current.focus()
    }
    

    render() {
        return (
            <div className="App">
                <input className="visa" type="text" name="card" placeholder="Visa number" onChange={this.changeClick} ref={this.cardRef} /> 
                <input type="text" placeholder="CV" name="cv" onChange={this.changeClick} ref={this.cvRef} /> <br /> <br />
                <input type="text" placeholder="Your name" name="name"  onChange={this.changeClick} ref={this.nameRef} /> <br /> <br />
                <button className="decr">Send</button>
            </div>
        );
    }
}

export default Form;