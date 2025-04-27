
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './components/contactForm/contactForm';
import { ContactList } from './components/contactList/contactList';
import { SearchBox } from './components/searchBox/searchBox';
// import { ListUsers } from './components/listUsers';
import initialContacts from './tasks.json'
// import './App.css'
import React from 'react';

function App() {
 
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('')


  
  const addContact = (newContact) => { 

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    } 

    setContacts(prevContacts =>
      [...prevContacts, {
        ...newContact,
        id: nanoid()
      }
        
      ]);
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    ); };

  const visibleContacts = contacts.filter(contact =>  
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  

  
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
  <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList contacts={visibleContacts}
    onDelete={deleteContact}
    />
    </div>
  );


};

export default App
