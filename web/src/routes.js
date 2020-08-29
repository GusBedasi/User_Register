import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Register from './pages/register';
import UserList from './pages/userList';

function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" component={Register} exact/>
        <Route path="/users" component={UserList}/>
        <Route path="/404" component={() => { return <div> NOT FOUND 404</div> }}/>
    </BrowserRouter>
  );
}

export default Routes;