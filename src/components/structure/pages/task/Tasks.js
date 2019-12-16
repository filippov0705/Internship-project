import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../../../../action/ProceduresActions';
import List from '../../../common/List';

class Tasks extends Component {

  render() {
    const data = (typeof(this.props.data) === 'string') ? this.props.procedures[this.props.data] : this.props.data;
        return <List data={data || []} content={this.props.content} />
    }
}

const mapStateToProps = store => {
  return {
      procedures: store.procedures
  }
}

 export default connect(mapStateToProps)(Tasks);