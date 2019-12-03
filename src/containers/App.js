import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { menuStateChange, redirectFromPage } from '../action/HeaderActions';
import './App.css'

class App extends Component {
  render() {
    const isMenuActive = this.props.header.isUserMenuActivated,
    isRedirected = this.props.header.isRedirected;
    return (
        <Header 
          MenuStateChange={this.props.menuStateChange} 
          isMenuActive={isMenuActive} 
          isRedirected={isRedirected} 
          redirectFromPage={this.props.redirectFromPage} />
    )
  }
}

const mapStateToProps = store => {
  return {
    header: store.header,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    menuStateChange: state => dispatch(menuStateChange(state)),
    redirectFromPage: state => dispatch(redirectFromPage(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)