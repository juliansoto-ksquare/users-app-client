import React, { useState, useEffect } from 'react';
import {User, user} from '../entities/User';
import { AxiosUserService } from '../services/AxiosUserService';
import { useParams } from 'react-router-dom';

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
            <div>
                <p>
                    <span>First name: {userDetails.firstName}</span>
                    <span>Last name: {userDetails.lastName}</span>
                    <span>age: {userDetails.age}</span>
                    <span>ID: {userDetails.id}</span>
                </p>
            </div>
        )
    }

    return UserDetailsView;
}

export default UserDetailsViewFactory;
