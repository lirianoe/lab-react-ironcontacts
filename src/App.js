import logo from './logo.svg';
import './App.css';
import contactsData from "./contacts.json"
import { useState } from 'react'
import trophy from './tropy.png'


function App() {
  
  let [contacts, setContacts] = useState(contactsData.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5))
  const [sortedContacts, setSortedContacts] = useState(contactsData)

  const randomContact = () => {
    let remainingContactsIndex = Math.floor(Math.random() * remainingContacts.length )
    let randomContact = remainingContacts[remainingContactsIndex]
    const newArr = [...contacts, randomContact]
    setContacts(newArr)
    const copyRemainigContacts = [...randomContact]
    copyRemainigContacts.splice(remainingContactsIndex, 1)
    setRemainingContacts(copyRemainigContacts)
  }

  const sortedContactsName = () => {
    let sortedContacts
  }

  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
      onClick={randomContact}
          >
        Add Random Contact
        </button>
        
        <table>
          <thead>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          </thead>
          <tbody>
     {contacts.map(el => {

    
     
      return(
        
            <tr>
            <td><img className='image' src={el.pictureUrl}/></td>
            <td>{el.name}</td>
            <td>{el.popularity}</td>
            <td>{ el.wonOscar ? <img className='trophy' src={trophy}/> : null}</td>
            <td>{ el.wonEmmy ? <img className='trophy' src={trophy}/>  : null }</td>
          </tr>

                )
                })}
          </tbody>
          
      </table>
    </div>
  );
}

export default App;
