import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../structure/pages/Main';
import Procedures from '../structure/pages/procedure/Procedures';
import NewProcedure from '../structure/pages/procedure/NewProcedure';
import EditProcedure from '../structure/pages/procedure/EditProcedure';
import InfoProcedure from '../structure/pages/procedure/InfoProcedure';
import ScheduleProcedure from '../structure/pages/procedure/ScheduleProcedure';
import PageTemplate from './PageTemplate';
import { mainPath, 
    ProceduresPath, 
    procedureInfoPath, 
    procedureSchedulePath,
    newProcedurePath,
    editProcedurePath
    } from '../../utils/BuildPaths';

const Root = props => (
    <PageTemplate>
        <Switch>
            <Route
                exact
                path={ProceduresPath()}
                name={'Procedures'}
                component={Procedures}
            />
            <Route
                exact
                path={mainPath()}
                name={'Main'}
                component={Main}
            />
            <Route
                path={newProcedurePath()}
                name={'NewProcedure'}
                component={NewProcedure}
            />
            <Route
                path={editProcedurePath()}
                name={'EditProcedure'}
                component={EditProcedure}
            />
            <Route
                path={procedureInfoPath()}
                name={'InfoProcedure'}
                component={InfoProcedure}
            />
            {/* <Route
                path={procedureSchedulePath()}
                name={'ProcedureInfo'}
                component={ScheduleProcedure}
            /> */}
            <Route name={'Main'} component={Main} />
        </Switch>
    </PageTemplate>
);

export default withRouter(Root);