import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TopNav } from '../TopNav/TopNav';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { LatestPublications } from '../LatestPublications/LatestPublications';
import { Test } from '../Test/Test';
import { Workspaces } from '../Workspaces/Workspaces';
import { Entities } from '../Entities/Entities';
import { Publications } from '../Publications/Publications';
import { Ecosystem } from '../Ecosystem/Ecosystem';


const Wrapper = styled.div`
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const MainPage: FC = () => {
    return (
        <Router>
            <Wrapper>
                <TopNav />
                <Content>
                    <LeftMenu />
                    <Switch>

                        <Route path='/Ecosystem'>
                            <Ecosystem />
                        </Route>

                        <Route path='/Publications'>
                            <Publications />
                        </Route>

                        <Route path='/Test'>
                            <Test />
                        </Route>

                        <Route path='/Workspaces'>
                            <Workspaces />
                        </Route>

                        <Route path='/Entities'>
                            <Entities />
                        </Route>
                    </Switch>
                </Content>
                <LatestPublications />
            </Wrapper>
        </Router>
    );
};
export default MainPage;