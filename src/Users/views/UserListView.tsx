import React, { useEffect, useState } from 'react';
import { User } from '../entities/User';
import {AxiosUserService} from '../services/AxiosUserService';
import { Link } from 'react-router-dom';

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
                <ul>
                    {
                        userList.map(user => {
                            return (
                                <li key={user.id}>
                                    <Link to={`/${user.id}`}>
                                        <span>First name: {user.firstName}</span>
                                        <span>Last name: {user.lastName}</span>
                                        <span>age: {user.age}</span>
                                        <span>ID: {user.id}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    return UserListView;
}

export default UserListViewFactory;
