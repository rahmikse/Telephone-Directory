import './App.css';
import Contacts from './Contacts'
import { Component } from 'react';
class  App extends Component {
  constructor(){
    super();
    this.addContact = this.addContact.bind(this)
  }
  state = {
    contacts : [{
      name : "Rahmi",
      phone : "05487951434"
    },
    {
      name : "Mesut",
      phone : "05687989434"
    },
    {
      name : "Ali",
      phone : "05468747434"
    },
    {
      name : "Mehmet",
      phone : "05868797434"
    }
  ]
  }

  addContact(contact){
    const {contacts} = this.state;
    contacts.push(contact)
    this.setState({
      contacts
    })
  }
  render(){
    return (
      <div className="App">
      <Contacts contacts ={this.state.contacts} 
        addContact={this.addContact}
      ></Contacts>
      </div>
    );
  }
  
}

export default App;
