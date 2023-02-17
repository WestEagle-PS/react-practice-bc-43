import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';

export class ContactsPage extends Component {
  state = {
    contact: [],
  };

  addContact = data => {
    const newContact = { ...data, id: nanoid(2) };
    this.setState(prevState => {
      return {
        contact: [...prevState.contact, newContact],
      };
    });
  };

  handleRemove = id => {
    this.setState(prevState => {
      const newState = prevState.contact.filter(item => item.id !== id);
      return { contact: newState };
    });
  };

  render() {
    return (
      <>
        <ContactsForm addContact={this.addContact} />
        {this.state.contact.length !== 0 && (
          <ContactList list={this.state.contact} remove={this.handleRemove} />
        )}
      </>
    );
  }
}
