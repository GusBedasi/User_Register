import React, { useState, useEffect } from 'react';
import './style.css';

import axios from '../../services/api';

function UserList() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    axios.get('/index')
    .then(response => {
      console.log(response);
      setUsers(response.data);  
    })
    .catch(error => {
      console.error(error);
    })
  }, [users.name])

  return (
    <ul>
      {users.map(user => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;