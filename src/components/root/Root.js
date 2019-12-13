import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../structure/pages/Main';
import Procedures from '../structure/pages/procedure/Procedures';
import ProcedurePage from '../structure/pages/procedure/ProcedurePage';
import ProcedureAdd from '../structure/pages/procedure/ProcedureAdd';
import ProcedureEdit from '../structure/pages/procedure/ProcedureEdit';
import ProcedureInfo from '../structure/pages/procedure/ProcedureInfo'
import PageTemplate from './PageTemplate';
import { mainPath, 
    ProceduresPath, 
    procedureInfoPath, 
    procedureSchedulePath,
    addprocedurePath,
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
                path={addprocedurePath()}
                name={'AddProcedure'}
                component={ProcedureAdd}
            />
            <Route
                path={editProcedurePath()}
                name={'EditProcedure'}
                component={ProcedureEdit}
            />
            <Route
                path={procedureInfoPath()}
                name={'ProcedureInfo'}
                component={ProcedureInfo}
            />
            {/* <Route
                path={procedureSchedulePath()}
                name={'ProcedureInfo'}              TODO: change after schedulePage will be merged
                component={ProcedurePage}
            /> */}
            <Route name={'Main'} component={Main} />
        </Switch>
    </PageTemplate>
);

export default withRouter(Root);