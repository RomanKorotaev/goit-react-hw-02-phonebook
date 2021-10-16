import React, { Component } from "react";
import s from "./ContactsList.module.css";

class ContactsList extends Component {
  render() {
    const { contacts, onDeleteContsct } = this.props;

    return (
      <ul >
        {/* <span className= {s.contactsListTitle}>Contacts</span> */}
        {contacts.map(({id, name, number}) => (
          <li  className= {s.item} key = {id}>
            <p> <span> {name}</span> <span>{number}</span></p >

            <button type="button"
             onClick ={ () => onDeleteContsct(id) }
              >Delete</button>

          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;

// const TodoList = ({ todos, onDeleteTodo }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text }) => (
//       <li key={id} className="TodoList__item">
//         <p className="TodoList__text">{text}</p>
//         <button onClick={() => onDeleteTodo(id)}>Удалить</button>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;
