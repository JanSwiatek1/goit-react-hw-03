// import PropTypes from 'prop-types';
import Contact from '../contact/Contact';
// import { useState } from 'react';

export const ContactList = ({ contacts, onDelete })=>{
    return (
        <ul>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
            ))}
        </ul>
    );
} 

// Input.PropTypes{
    
// };