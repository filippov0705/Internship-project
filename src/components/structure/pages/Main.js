import React, { Component } from "react";
import Page from "../../common/Page";

export default class Main extends Component {
  render() {
    //     if (this.props.history.location.search) {
    //       fetch('http://localhost:3001/api/registration', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json;charset=utf-8'},   //TODO: return when registration will be actual
    //         body: JSON.stringify({
    //           code: this.props.history.location.search.slice(6)
    //         })
    //       }).then(response => response.text()).then(content => console.log(content))
    // }

    return (
      <Page>
        <h1>MAIN</h1>
      </Page>
    );
  }
}
