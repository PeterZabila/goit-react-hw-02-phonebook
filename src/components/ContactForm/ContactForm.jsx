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
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''});
    }

    render() {
      return (
        <From action="submit" onSubmit={this.onFormSubmit}>
           
            <FormFileds>
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
            </FormFileds>
            
            <Button type='submit'>Add Contact</Button>
        </From>
      );
    } 
  };


  const FormFileds = styled.div`
    width: 300px;
    display: flex;
    
  `
  const From = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    width: 300px;
  `


  const Button = styled.button`
    width: 120px;
    margin-top: 10px;
    color: white;
    background-color: blue;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 5px;
`;