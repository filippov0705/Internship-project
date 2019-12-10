import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import App from '../../containers/App';
import Procedures from '../../containers/Procedures';
import ProcedureInfo from '../../containers/ProcedureInfo';
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
                name={'App'}
                component={App}
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
            <Route name={'App'} component={App} />
        </Switch>
    </PageTemplate>
);

export default withRouter(Root);