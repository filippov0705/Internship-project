import React from 'react'
import { Redirect } from "react-router-dom"

export class HeaderBar extends React.Component {
    btnClick = () => {
        this.props.MenuStateChange(!this.props.isMenuActive)
    }

    proceduresClick = () => {
        this.props.redirectFromPage(true)
    }

    componentWillUnmount() {
        this.props.redirectFromPage(false)
    }

    render() {
        if (this.props.isRedirected) {
            return <Redirect push to="/procedures" />;
            }

        return (
            <header className='header'>
            <div>
                <div className='header__logo'></div>
                <input className='header__search'></input>
                <span>Главная</span>
                <span onClick={this.proceduresClick}>Процедуры</span>
            </div>
            <div>
                <button className='header__menuBtn' onClick={this.btnClick}>Btn</button>
            </div>
          </header>
        )
    }
}