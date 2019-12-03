import React from 'react'
import { UserMenu } from './UserMenu';
import { HeaderBar } from './HeaderBar';

export class Header extends React.Component {
  render() {
      return (
        <React.Fragment>
            <HeaderBar 
                MenuStateChange={this.props.MenuStateChange} 
                isMenuActive={this.props.isMenuActive} 
                isRedirected={this.props.isRedirected} 
                redirectFromPage={this.props.redirectFromPage} />

            <UserMenu isMenuActive={this.props.isMenuActive} />
        </React.Fragment>
      )
  }
}