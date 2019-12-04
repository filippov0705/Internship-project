import React from 'react'
import { Link } from 'react-router-dom'
import { mainPath, ProceduresPath } from '../utils/BuildPaths';
import { FormattedMessage } from 'react-intl';

export class HeaderBar extends React.Component {
    btnClick = () => {
        this.props.menuStateChange(!this.props.isUserMenuActive)
    }

    render() {          
        return (
            <header className='header'>
            <div className='header__leftbar'>
                <div className='header__logo'></div>
                <input className='header__search'></input>
                <Link to={mainPath()}><span><FormattedMessage id="navigation.mainPage" /></span></Link>
                <Link to={ProceduresPath()}><span><FormattedMessage id="navigation.procedures" /></span></Link>

            </div>
            <div>
                <button className='header__menuBtn' onClick={this.btnClick}>Btn</button>
            </div>
          </header>
        )
    }
}