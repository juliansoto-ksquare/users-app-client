import React from 'react';
import styled from 'styled-components';

export interface IUserFormProps {
    onSubmit: (event: React.FormEvent) => void;
}

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1em;
    margin-bottom: 1em;
`;

const Input = styled.input`
    background: white;
    margin-top: 0.5em;
    padding: 1em;
    border: solid 1px black;
    border-radius: 0.5em;
`;

const Button = styled.button`
    padding: 1em;
    width: 100%;
    font-size: 1em;
    border: solid 2px black;
    border-radius: 0.5em;
    background: #3ba5ff;
    font-weight: bold;
`;

export const AddUserForm: React.FC<IUserFormProps> = ({onSubmit}) => {
    return (
        <div>
            <h1>Add user</h1>
            <form onSubmit={onSubmit}>
                <Label>
                    First name:
                    <Input name="firstName" type="text" required />
                </Label>
                <Label>
                    Last name:
                    <Input name="lastName" type="text" required />
                </Label>
                <Label>
                    Age:
                    <Input name="age" type="number" required />
                </Label>
                <Button>Create</Button>
            </form>
        </div>
    )
}
