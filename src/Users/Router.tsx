import React from 'react';
import { Switch, Route } from 'react-router';
import UserListViewFactory from './views/UserListView';
import UserDetailsViewFactory from './views/UserDetailsView';
import AddUserViewFactory from './views/AddUserView';

import {AxiosUserService} from './services/AxiosUserService';

const axiosUserService = AxiosUserService();

const UserListView = UserListViewFactory();
const UserDetailsView = UserDetailsViewFactory();
const AddUserView = AddUserViewFactory(axiosUserService);

const UserRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <UserListView />
      </Route>
      
      <Route path="/add">
        <AddUserView/>
      </Route>

      <Route exact path="/:id">
        <UserDetailsView/>
      </Route>
    </Switch>
  )
}

export default UserRouter;