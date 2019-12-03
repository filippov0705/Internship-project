import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { menuStateChange, redirectFromPage } from '../action/HeaderActions';
import './App.css'

class Procedures extends Component {
    render() {
        return (
            <Header />
        )
    }
}

const mapStateToProps = store => {
    return {

    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {

    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Procedures)