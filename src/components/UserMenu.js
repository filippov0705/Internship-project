import React from 'react'
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';

export class UserMenu extends React.Component {
    render() {
        return (
            <div className={this.props.isUserMenuActive ? 'menu menu-activated' : 'menu'}>
                <Button variant="contained" color="default">
                    <FormattedMessage id="userMenu.yourProfile" />
                </Button>
                <Button variant="contained" color="default">
                    <FormattedMessage id="userMenu.help" />
                </Button>
                <Button variant="contained" color="default">
                    <FormattedMessage id="userMenu.signOut" />
                </Button>
            </div>
        );
    }
  }