
import { useState } from 'react';
import { ContactForm } from './components/contactForm/contactForm';
import { ContactList } from './components/contactList';
import { SearchBox } from './components/searchBox';
// import { ListUsers } from './components/listUsers';
import initialContacts from './tasks.json'
// import './App.css'
// import { nanoid } from 'nanoid';
// import React from 'react';

function App() {
 
  const [contact, setContact] = useState(initialContacts);
  const [filter, setFilter] = useState('')


  const addContact = (newContact) => { };
  const deleteContact = (contactId) => { };
  const visibleContacts = () => { };
  
  
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
  <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList tasks={visibleContacts} onDelete={deleteContact}/>
    </div>
  );


}

export default App
