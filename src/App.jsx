import React from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {

  // hold password
  const [password, setPassword] = useState('empty')

  // hold password length
  const [passwordLength, setPasswordLength] = useState(0)

  // determine whether to include symbols
  const [includeSymbols, setIncludeSymbols] = useState(false)

  // determine whether to include numbers
  const [includeNumbers, setIncludeNumbers] = useState(false)

  // determine capitalization
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)

  // generate passwords
  function passwordAlgo(){
    const numbers = '1234567890'
    const symbols = '!@#$%^&*()_+,./:;'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let thisPassword = '';
    let newPassword = '';

    if(includeSymbols){
      for(let i of symbols){
        thisPassword += i
      }
    }
    if(includeNumbers){
      for(let z of numbers){
        thisPassword += z
      }
    }
    if(includeLowerCase){
      for(let z of lowercase){
        thisPassword += z
      }
    }
    if(includeUpperCase){
      for(let z of uppercase){
        thisPassword += z
      }
    }

    for(let i = 0; i < passwordLength; i++){
      newPassword += thisPassword.charAt(Math.floor(Math.random() * thisPassword.length))
    }

    setPassword(newPassword)
  }

  function handleSubmit(e){
    e.preventDefault()
    passwordAlgo()
  }

  function handleChange(e){
    const {value, name} = e.target
    switch(name){
      case 'length':
        setPasswordLength(value)
        break;
      case 'symbols':
        setIncludeSymbols(prevState => !prevState)
        break;
      case 'numbers':
        setIncludeNumbers(prevState => !prevState)
        break;
      case 'lowercase':
        setIncludeLowerCase(prevState => !prevState)
        break;
      case 'uppercase':
        setIncludeUpperCase(prevState => !prevState)
        break;
    }
  }

  return(
    <main>
      <h1>Password Generator</h1>
      <div className="passwordInterface">{password}</div>
      <form onSubmit={handleSubmit}>
        <div className="lengthOption">
          <p>Password length </p>
          <input type="number" onChange={handleChange} name="length" value={passwordLength}/>
        </div>
        <div className="checkboxContainer">
          <p>Include symbols</p>
          <input type="checkbox" checked={includeSymbols} onChange={handleChange} name="symbols" />
        </div>
        <div className="checkboxContainer">
          <p>Include numbers</p>
          <input type="checkbox" checked={includeNumbers} onChange={handleChange} name="numbers" />
        </div>
        <div className="checkboxContainer">
          <p>Include uppercase</p>
          <input type="checkbox" checked={includeUpperCase} onChange={handleChange} name="uppercase" />
        </div>
        <div className="checkboxContainer">
          <p>Include lowercase</p>
          <input type="checkbox" checked={includeLowerCase} onChange={handleChange} name="lowercase" />
        </div>
        <div className="buttonContainer">
          <button className='generate'>Generate Password</button>
        </div>
      </form>
    </main>
  )
}