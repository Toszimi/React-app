import React, { FC } from 'react';
import 'C:/Users/Damian/Desktop/React2/my-app/src/styledHelpers/LeftMenu.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { fontSize } from '../../styledHelpers/FontSizes';

const LeftMenuWrapper = styled.div`

max-width: 200px;
`;

const LeftMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid grey;
    border-bottom: 1px solid transparent;
    margin-left: 20px;
    margin-top: 20px;
    height: 100px;
    width: 180px;
`;
const LeftMenuContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid grey;
    margin-left: 20px;
    height: 60px;
    width: 180px;
    padding: 5px;
`;

const PhotoLogo = styled.div`
position: relative;
top: -10px;
`;

const PhotoText = styled.div`
position: relative;
top: -5px;
color: #194cf1;
`;

const JobCompanyText = styled.div`
position: relative;
color: grey;
font-size: 12px;
`;

const Network = styled.div`
display: flex;
position: relative;
flex-direction: row;
justify-content: space-between;
padding-top: 3px;
padding-left: 3px;
`;

const Publication = styled.div`
display: flex;
position: relative;
flex-direction: row;
justify-content: space-between;
padding-top: 3px;
padding-left: 4px;
padding-right: 1px;
`;

const Publications = styled.div`
margin-top: 10px;    
margin-left: 20px;
padding: 5px;
display: flex;
flex-direction: row;
`;

const Ecosystem = styled.div`
margin-top: 10px;    
margin-left: 20px;
padding: 5px;
display: flex;
flex-direction: row;
`;

const Entities = styled.div`
margin-top: 10px;    
margin-left: 20px;
padding: 5px;
display: flex;
flex-direction: row;
`;

export const LeftMenu: FC = () => {
    return (
        <LeftMenuWrapper>
            <LeftMenuContainer>
                <PhotoLogo>
                    <img src='./media/icons/house2.svg' alt='jpg' />
                </PhotoLogo>
                <PhotoText> Humberta Swift </PhotoText>
                <JobCompanyText>Job title - Company</JobCompanyText>
            </LeftMenuContainer>
            <LeftMenuContainer2>
                <Network>
                    <img src='./media/icons/network.png' className='smallerIMG' alt='jpg' />
                    <p>Your network</p>
                    <a href={'/'}>
                        <img src='./media/icons/network.svg' className='FlexEnd' alt='jpg' />
                    </a>
                </Network>
                <Publication>
                    <img src='./media/icons/publications.svg' className='smallerIMG' alt='jpg' />
                    <p>Your Publications</p>
                    <a href={'/'}>
                        <img src='./media/icons/plus.svg' className='FlexEnd' alt='jpg' />
                    </a>
                </Publication>
            </LeftMenuContainer2>
            <Publications>
                <img src='./media/icons/publications.svg' className='left' alt='jpg' />
                <Link to='/Publications' className='antyLink' >Publications</Link>
            </Publications>
            <Ecosystem>
                <img src='./media/icons/ecosystem.svg' className='left' alt='jpg' />
                <Link to='/Ecosystem' className='antyLink'>Ecosystem</Link>
            </Ecosystem>
            <Entities>
                <img src='./media/icons/entities.svg' className='left' alt='jpg' />
                <Link to='/Entities' className='antyLink' >Entities</Link>
            </Entities>
        </LeftMenuWrapper>
    );
};

export default LeftMenu;