import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contactFormState) => {
    const { name, number } = contactFormState;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const isRepeat = this.state.contacts.find(
      ({ name }) => name === contactFormState.name
    );

    isRepeat ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
         contacts: [contact, ...prevState.contacts],
      }));
  };

  chengeFilter = (event) => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    const { filter, contacts } = this.state;
    const normolizedFinder = filter.toLowerCase();
    const visibleContacts = contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(normolizedFinder)
    );

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onHendlerChenge={this.chengeFilter} />
        <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
      </div>
    );
  };
};

export default App;
