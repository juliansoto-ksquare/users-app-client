import React, { useState, useEffect } from 'react';
import {User, user} from '../entities/User';
import { AxiosUserService } from '../services/AxiosUserService';
import { useParams } from 'react-router-dom';
import {UserDetailsRow} from '../atoms/UserDetails';

const axiosUserService = AxiosUserService();

const UserDetailsViewFactory = () => {
    const UserDetailsView = () => {
        const [userDetails, setUserDetails] = useState<User>(user);
        const { id } = useParams();

        useEffect(() => {
            (async () => {
                const res = await axiosUserService.getOneById(String(id));
                setUserDetails(res);
            })();
        }, [id]);

        return (
            <table>
                <tbody>
                    <UserDetailsRow>
                        <td>First name:</td>
                        <td>{userDetails.firstName}</td>
                    </UserDetailsRow>
                    <UserDetailsRow>
                        <td>Last name:</td>
                        <td>{userDetails.lastName}</td>
                    </UserDetailsRow>
                    <UserDetailsRow>
                        <td>Age:</td>
                        <td>{userDetails.age}</td>
                    </UserDetailsRow>
                    <UserDetailsRow>
                        <td>ID:</td>
                        <td>{userDetails.id}</td>
                    </UserDetailsRow>
                </tbody>
            </table>
        )
    }

    return UserDetailsView;
}

export default UserDetailsViewFactory;
