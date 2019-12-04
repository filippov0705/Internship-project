import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import App from '../../containers/App';
import Procedures from '../../containers/Procedures';
import Application from './Application';
import { mainPath, ProceduresPath } from '../../utils/BuildPaths';

const Root = props => (
    <Application>
        <Switch>
            <Route
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
            <Route name={'App'} component={App} />
        </Switch>
    </Application>
);

export default withRouter(Root);