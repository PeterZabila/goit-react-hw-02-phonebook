import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter'
import styled from 'styled-components';
import shortid from 'shortid';


export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  contactId = shortid.generate();
 

  onSubmit = ({id, name, number}) => {
    this.setState(prevState => prevState.contacts.push({id, name, number}))
  }

  onFilter = (e) => {
    this.setState({filter: e.target.value})
  }

  onDeleteContact = ({id}) => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }))
  }

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
      
      <Wrapper>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.onSubmit}/>

          <h2>Contacts</h2>
          <Filter list={this.state.filter} onChange={this.onFilter}/>
          <ContactList list={filteredContacts} onDeleteContact={this.onDeleteContact}/>
      </Wrapper>
    );

  }
  
};


const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justifyContent: center;
    alignItems: center;
    color: #010101;
`