import React, { Component } from 'react';
import { connect } from 'react-redux';
import { menuStateChange } from '../action/HeaderActions';
import SearchAppBar from './SearchAppBar'

class Header extends Component {
  render() {
      return (
        <React.Fragment>
            <SearchAppBar />
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