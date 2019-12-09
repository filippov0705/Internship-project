import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main } from '../components/Main';
import './App.css';

class App extends Component {

  render() {
    return <Main />
  }
}

const mapStateToProps = store => {
  return {
    app: store.app,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)