import React from 'react';
import './style.css';

import Table from '../../components/table';

function UserList() {
  return (
    <>
      <header>
        <h1>Lista de usuários</h1>
      </header>
      <Table/>
    </>
  );
}

export default UserList;