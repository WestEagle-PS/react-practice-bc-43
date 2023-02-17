import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';

export class ContactsPage extends Component {
  state = {
    contact: [],
  };

  addContact = data => {
    console.log(data);
    const newContact = { ...data, id: nanoid(2) };
    this.setState(prevState => {
      return {
        contact: [...prevState.contact, newContact],
      };
    });
  };

  render() {
    return (
      <>
        <ContactsForm addContact={this.addContact} />
        {this.state.contact.length !== 0 && (
          <ContactList list={this.state.contact} />
        )}
      </>
    );
  }
}
