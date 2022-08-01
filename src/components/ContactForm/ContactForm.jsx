import React, { Component } from 'react';
import styled from 'styled-components';
import shortid from 'shortid'

export default class ContactForm extends Component {

    state = {
      id: shortid.generate(),
      name: '',
      number: '',
    };

    onInputChange = (e) => {
        const { name } = e.target;
        
        this.setState({ [name]: e.target.value })
    } 
  
    onFormSubmit = (e) => {
        e.preventDefault();
      //   this.setState({id: shortid.generate()})
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''});
    }

    render() {
      return (
        <FromFields action="submit" onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.onInputChange}
                required
            />
            </label>
            
        <label htmlFor="number">Number
            <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={this.onInputChange}
                    required
                />
        </label>
            <button type='submit'>Add Contact</button>
        </FromFields>
      );
    } 
  };

  const FromFields = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;

  `