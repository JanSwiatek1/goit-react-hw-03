import React from 'react';
import { Input } from './Input'
import { useState } from 'react';

const INITIAL_STATE = { login: '', number: '' }

export function ContactForm() {
    const [userData, setUserData] = useState(INITIAL_STATE)

    const onChange = (event) => {
        const { name, value } = event.target;
  
        setUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        setUserData(INITIAL_STATE)
    }


    return (
        <form onSubmit={onSubmit}>
            <Input
                type="text"
                name="login"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={userData.login}
                onChange={onChange}
                required
            />
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={userData.number}
                onChange={onChange}
                required
            />

            <button type="submit">Add contact</button>

        </form>
    );
}