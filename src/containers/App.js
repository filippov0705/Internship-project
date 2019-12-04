import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import './App.css'

class App extends Component {

  render() {


    return (
      <React.Fragment>

          <Main />

          </React.Fragment>
    )
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