import { Component } from 'react';
import styles from './ContactsForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactsForm extends Component {
  state = { ...INITIAL_STATE };

  handleChangeInput = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={this.handleChangeInput}
          id="name"
          type="text"
          value={name}
        />
        <label htmlFor="number">Tel:</label>
        <input
          onChange={this.handleChangeInput}
          id="number"
          type="text"
          value={number}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
