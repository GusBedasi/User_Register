import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Register from './pages/register';
import UserList from './pages/userList';

function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" component={Register} exact/>
        <Route path="/list" component={UserList}/>
    </BrowserRouter>
  );
}

export default Routes;