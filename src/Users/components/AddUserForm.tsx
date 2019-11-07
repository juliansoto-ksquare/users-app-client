import React from 'react';

export interface IUserFormProps {
    onSubmit: (event: React.FormEvent) => void;
}

export const AddUserForm: React.FC<IUserFormProps> = ({onSubmit}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    First name:
                    <input name="firstName" type="text" required />
                </label>
                <label>
                    Last name:
                    <input name="lastName" type="text" required />
                </label>
                <label>
                    Age:
                    <input name="firstName" type="text" required />
                </label>
                <button>Create</button>
            </form>
        </div>
    )
}
