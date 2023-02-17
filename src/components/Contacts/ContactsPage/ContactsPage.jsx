import { Component } from 'react';
import { ContactsForm } from '../ContactsForm/ContactsForm';

export class ContactsPage extends Component {
  addContact = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <ContactsForm addContact={this.addContact} />
      </>
    );
  }
}
