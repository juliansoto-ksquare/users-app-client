import React from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
`;

export const UserDetailsRow: React.FC = ({children}) => {
    return (
        <TableRow>
            {children}
        </TableRow>
    )
}