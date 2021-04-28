import { FC } from 'react';
import styled from 'styled-components';
import 'C:/Users/Damian/Desktop/React2/my-app/src/styledHelpers/TopNav.css';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import { ExpandedMenu } from './ExpandedMenu';

const InnerWrapper = styled.div`
    display: flex;
    width: 1200px;
    background: $(Colors.white);
    align-items: center;
`;

const RightIcons = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
`;

const InputWrapper = styled.div`
display: flex;
align-items: center;
border: 1px solid rgba(128, 128, 128, 0.549);;
padding: 2px;
margin: 0 auto;
width: 350px;
`;

export const TopNav: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>
                <img className='logo' src='./media/logo.png' alt='jpg' />
                <img className='HouseSvg' src='./media/icons/house2.svg' alt='jpg' />
                <div className='Menu'>
                    <img src='/media/icons/arrow-down.svg' alt='jpg' />
                    <ExpandedMenu />
                </div>
                <InputWrapper>
                    <div className="search">
                        <input type='text' placeholder='Search Legalcluster' />
                        <img src='/media/icons/search.svg' alt='jpg' />
                    </div>
                </InputWrapper>
                <RightIcons>
                    <img src='/media/icons/house.svg' alt='jpg' />
                    <img src='/media/icons/comments.svg' alt='jpg' />
                    <img src='/media/icons/bell.svg' alt='jpg' />
                    <div className='Circle1'></div>
                    <div className='Circle2'></div>
                    <div className='smallCircle1'>3</div>
                    <div className='smallCircle2'>4</div>
                </RightIcons>
            </InnerWrapper >
        </Wrapper>
    );
};

export default TopNav;