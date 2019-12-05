import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserMenu } from './UserMenu';
import { HeaderBar } from './HeaderBar';
import { menuStateChange } from '../action/HeaderActions';
import { SearchAppBar } from './SearchAppBar'

class Header extends Component {
  render() {
      return (
        <React.Fragment>
          <SearchAppBar />
            <HeaderBar 
                menuStateChange={this.props.menuStateChange} 
                isUserMenuActive={this.props.header.isUserMenuActive} 
                navBarActive={this.props.navBarActive} />
            <UserMenu isUserMenuActive={this.props.header.isUserMenuActive} />
        </React.Fragment>
      );
  }
}

const mapStateToProps = store => {
  return {
    header: store.header,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    menuStateChange: state => dispatch(menuStateChange(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)