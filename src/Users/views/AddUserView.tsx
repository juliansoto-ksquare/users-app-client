import React from 'react';
import { AddUserForm } from '../components/AddUserForm';

const AddUserViewFactory = () => {
    const AddUserView = () => {
        return (
            <div>
                <AddUserForm onSubmit={() => console.log('submitted')} />
            </div>
        )
    }

    return AddUserView;
}

export default AddUserViewFactory;