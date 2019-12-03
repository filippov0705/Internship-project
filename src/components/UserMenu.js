import React from 'react'

export class UserMenu extends React.Component {
    render() {
        return (
            <div className={this.props.isMenuActive ? 'menu menu-activated' : 'menu'}>

            </div>
        )
    }
  }