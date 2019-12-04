import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom"
import { menuStateChange, redirectFromPage } from '../action/HeaderActions';
import './App.css'

class Procedures extends Component {

    render() {
        const isMenuActive = this.props.procedures.isUserMenuActivated,
        isRedirected = this.props.procedures.isRedirected,
        navBarActive = this.props.procedures.navBarActive;

        if (isRedirected) {
            this.props.redirectFromPage(false);
            return <Redirect push to="/" />;
            }

        return <p>aas</p>
    }
}

const mapStateToProps = store => {
    return {
        procedures: store.procedures
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        menuStateChange: state => dispatch(menuStateChange(state)),
        redirectFromPage: state => dispatch(redirectFromPage(state))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Procedures)