import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../page/Main';
import Procedures from '../page/procedure/Procedures';
import ProcedureInfo from '../page/task/ProcedureInfo';
import PageTemplate from './PageTemplate';
import { mainPath, 
    ProceduresPath, 
    editProcedurePath, 
    procedureInfoPath, 
    procedureSchedulePath 
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
                path={editProcedurePath()}
                name={'ProcedureInfo'}
                component={ProcedureInfo}
            />
            <Route
                path={procedureInfoPath()}
                name={'ProcedureInfo'}
                component={ProcedureInfo}
            />
            <Route
                path={procedureSchedulePath()}
                name={'ProcedureInfo'}
                component={ProcedureInfo}
            />
            <Route name={'Main'} component={Main} />
        </Switch>
    </PageTemplate>
);

export default withRouter(Root);