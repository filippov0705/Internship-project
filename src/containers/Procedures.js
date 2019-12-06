import { Component } from 'react';
import { connect } from 'react-redux';
import { menuStateChange, redirectFromPage } from '../action/HeaderActions';
import './App.css'

class Procedures extends Component {

    render() {
        //TODO: add content of the procedures page
        return null
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