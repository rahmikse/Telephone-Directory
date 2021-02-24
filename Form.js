import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Form extends Component {
    constructor(){
        super();
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    static propTypes ={
        addContact:PropTypes.func
    }
    state ={
       name :"",
       phone :"" 
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
   
    onSubmit(e){

        this.props.addContact({
            ...this.state
        })
        this.setState({
            name:"",
            phone:""
        })

        e.preventDefault()
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name"
                     id="name" 
                     value={this.state.name}
                      onChange ={this.onChange}
                       placeholder="Enter a name">
                       </input>
                    <br></br>
                    <input name="phone"
                     id="phone" 
                     value={this.state.phone} 
                     onChange ={this.onChange} 
                     placeholder="Enter a phone number">
                     </input>
                    <br></br>
                    <br></br>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
