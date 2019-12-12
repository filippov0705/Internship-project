import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../structure/pages/Main';
import Procedures from '../structure/pages/procedure/Procedures';
import ProcedureInfo from '../structure/pages/procedure/ProcedureInfo';
import ProcedureAdd from '../structure/pages/procedure/ProcedureAdd';
import ProcedurePage from '../structure/pages/procedure/ProcedurePage';
import PageTemplate from './PageTemplate';
import { mainPath, 
    ProceduresPath, 
    editProcedurePath, 
    procedureInfoPath, 
    procedureSchedulePath,
    addprocedurePath
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
                path={addprocedurePath()}
                name={'AddProcedure'}
                component={ProcedurePage}
            />
            <Route
                path={editProcedurePath()}
                name={'ProcedureInfo'}
                component={ProcedurePage}
            />
            <Route
                path={procedureInfoPath()}
                name={'ProcedureInfo'}
                component={ProcedurePage}
            />
            <Route
                path={procedureSchedulePath()}
                name={'ProcedureInfo'}
                component={ProcedurePage}
            />
            <Route name={'Main'} component={Main} />
        </Switch>
    </PageTemplate>
);

export default withRouter(Root);