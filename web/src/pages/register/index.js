import React, { useState } from 'react';

import './style.css'

import axios from '../../services/api';

function Register() {

  const [ users, setUsers ] = useState({name: ""},{ email: ""});

  function inputHandler(input){
    const key = input.target.name;
    const value = input.target.value;
    setUsers({...users, [key]: value});
  }

  async function submitHandler(e){
    e.preventDefault();
    const { name, email } = users;
    
    try{
      await axios.post('/create', { name, email });
      console.log("Usuario criado!")
  
      document.getElementsByTagName('input').name.value = ""
      document.getElementsByTagName('input').email.value = ""
    } catch (error) {
      console.error(error);
      console.error("Falhou devido a formato de dados inválidos enviados");
    }
  }

  return (
    <div id="registrarion-form">
      <form>
        <fieldset>
        <legend>Cadastro</legend>
          <label>Nome:</label>
          <input type="text" placeholder="Name" name="name" onChange={inputHandler}/>
          <label>E-mail:</label>
          <input type="email" placeholder="example@example.com" name="email" onChange={inputHandler}/>
          <button type="submit" className="register-button" onClick={submitHandler}>Cadastrar</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;