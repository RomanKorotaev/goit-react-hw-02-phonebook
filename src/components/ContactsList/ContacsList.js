import React, { Component } from "react";
import s from "./ContactsList.module.css";


class ContactsList extends Component {

  state = {
    
    contacts: [ ],
  };

  deleteContact = (contactId) => {
    this.setState ( prevState => ({
      contacts: prevState.contacts.filter ( contact=> contact.id !== contactId)
    }) )
  }


  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className= {s.ContactsListStyle}>
        {/* <span className= {s.contactsListTitle}>Contacts</span> */}
        {contacts.map(({id, name, number}) => (
          <li  className= {s.item} key = {id}>
            <p> <span> {name} : </span> <span>{number}</span></p >

            <button type="button"
            className ={s.deleteBtn}
             onClick ={ () => onDeleteContact(id) }
              >Delete</button>

          </li>
        ))}
      </ul>

    );
  }
}

export default ContactsList;

