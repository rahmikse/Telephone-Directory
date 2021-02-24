import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './List.css'

 class List extends Component {
   state={
       filterText:""
   }
   onChangeFilterText =(e)=>{
       this.setState({
           filterText : e.target.value
       })
   }
    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        )
        return (
            <div className={"listArea"}>
                <input 
                 onChange={this.onChangeFilterText}
                 value={this.state.filterText} 
                 type={"text"}
                 name={"filter"} 
                 id={"filter"} 
                 placeholder={"Filter by phone or name"}>
                 </input>
                <ul className={"list"}>
                 {
                     filteredContacts.map(contact=> 
                         
                            <li key={contact.phone}>
                            <span className={"name"}>{contact.name}</span>
                            <span className={"phone"}>{contact.phone}</span>
                            <span className={"clearfix"}></span>
                        </li>
                        
                         
                     )
                 }
                </ul>
            </div>
        )
    }
}
export default List;