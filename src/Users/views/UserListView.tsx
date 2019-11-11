import React, { useEffect, useState } from 'react';
import { User } from '../entities/User';
import {AxiosUserService} from '../services/AxiosUserService';
import { Link } from 'react-router-dom';
import {UserList, UserListItemLink} from '../atoms/UserListItem';

const axiosUserService = AxiosUserService();

const UserListViewFactory = () => {
    const UserListView = () => {
        const [userList, setUserList] = useState<User[]>([]);

        useEffect(() => {
            (async () => {
                const res = await axiosUserService.getList();
                setUserList(res);
            })();
        }, []);

        return (
            <div>
                <header>
                    <h1>List of users</h1>
                    <Link to="/add">Add user</Link>
                </header>
                <UserList>
                    {
                        userList.map(user => {
                            return (
                                <li key={user.id}>
                                    <UserListItemLink to={`/${user.id}`}>
                                        {
                                            `${user.firstName} ${user.lastName}`
                                        }
                                    </UserListItemLink>
                                </li>
                            )
                        })
                    }
                </UserList>
            </div>
        )
    }

    return UserListView;
}

export default UserListViewFactory;
