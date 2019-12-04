import React from 'react'
import { FormattedMessage } from 'react-intl';

export class UserMenu extends React.Component {
    render() {
        return (
            <div className={this.props.isUserMenuActive ? 'menu menu-activated' : 'menu'}>
                <button><FormattedMessage id="userMenu.yourProfile" /></button>
                <button><FormattedMessage id="userMenu.help" /></button>
                <button><FormattedMessage id="userMenu.signOut" /></button>
            </div>
        )
    }
  }