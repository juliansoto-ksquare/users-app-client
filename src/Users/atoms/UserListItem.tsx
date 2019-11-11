import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    list-style: none;
    padding: 0;
`;

const Item = styled(Link)`
    display: block;
    list-style: none;
    padding: 1em;
    margin: 0;
    color: black;
    font-weight: bold;

    &:hover {
        background: #eee;
    }
`;

export interface IUserListItemLink {
    to: string;
}

export const UserListItemLink: React.FC<IUserListItemLink> = ({to, children}) => {
    return (
        <Item to={to}>
            {children}
        </Item>
    )
}

export const UserList: React.FC = ({children}) => {
    return (
        <Ul>
            {children}
        </Ul>
    )
}