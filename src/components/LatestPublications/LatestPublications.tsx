import React, { FC } from 'react';
import 'C:/Users/Damian/Desktop/React2/my-app/src/styledHelpers/LeftMenu.css';
import styled from 'styled-components';

const Container = styled.div`
display: flex;

/* position: absolute;
top: 61px;
left: 260px; */
height: 200px;
width: 200px;
border: 1px solid grey;
`;

export const LatestPublications: FC = () => {
    return (
        <Container />
    );
};
export default LatestPublications;