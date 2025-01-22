import { useState } from 'react'
import './App.module.css'
import contacts from '../assets/contacts.json'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'

const App = () => {
  const onFilter = () => {
  
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox onFilter={onFilter}/>
      <ContactList />
    </div>
  )
}

export default App
