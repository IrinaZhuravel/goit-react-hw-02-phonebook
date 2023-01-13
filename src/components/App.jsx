import React, { Component } from 'react';
import shortId from 'shortid';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    this.setState(prevState => {
      const checkContact = this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      const contacts = prevState.contacts;

      if (checkContact) {
        alert(`${name} is already in contacts`);
        return contacts;
      }
      return {
        contacts: [
          {
            id: shortId.generate(),
            name,
            number,
          },
          ...contacts,
        ],
      };
    });
  };

  filterContacts = name => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          <Filter onChange={this.handleChange} filter={this.state.filter} />
          <ContactList
            filterContacts={this.filterContacts(this.state.filter)}
            onClickDelete={this.deleteContact}
          />
        </div>
      </Container>
    );
  }
}

export default App;