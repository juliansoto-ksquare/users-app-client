import React from 'react';
import { AddUserForm } from '../components/AddUserForm';
import {IUserService} from '../services/UserService';

const AddUserViewFactory = (userService: IUserService) => {
    const AddUserView = () => {
        const handleSubmitAddUserForm = (event: any) => {
            event.preventDefault();
            const {target} = event;
            const firstName = target.firstName.value;
            const lastName = target.lastName.value;
            const age = Number(target.age.value); // casting
            console.log(firstName, lastName, age);
            userService.createOne({firstName, lastName, age});
        }

        return (
            <div>
                <AddUserForm onSubmit={handleSubmitAddUserForm} />
            </div>
        )
    }

    return AddUserView;
}

export default AddUserViewFactory;