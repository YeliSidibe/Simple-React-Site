import React, { Component, PropTypes } from 'react';
import IdentityMenu from './identityMenu';

import BootstrapHeaderLogo from '../../images/bootstrap-solid';

export default class header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="header-nav">
                <a className="navbar-brand logo-nav-bar" href="#">
                    <BootstrapHeaderLogo/>
                </a>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">                                
                    <ul className="navbar-nav mr-auto list-header-menu ul-header-custom">
                        <li className="nav-item active">
                            <a className="nav-link" href="/profile" >
                                <div className="menu-icons"><i className="fa fa-user-circle"></i></div>                                
                                <div id="username-profile">Yeli Sidibe&nbsp;&nbsp;</div>
                            </a>
                        </li>
                    </ul>                    
                    <ul className="navbar-nav mr-auto list-header-menu" id="ulist-menu-items">                                               
                        <li className="nav-item">
                            <a className="nav-link d-flex flex-row" href="/vehicles">
                                <span className="menu-icons"><i className="fa fa-money"></i></span>
                                <b className="bold-item-text">
                                    Swap
                                </b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex flex-row" href="/vehicles">
                                <span className="menu-icons"><i className="fa fa-calendar"></i></span>
                                <b className="bold-item-text">Swap History</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex flex-row" href="#">
                                <span className="menu-icons"><i className="fa fa-question-circle"></i></span>
                                <b className="bold-item-text">Help</b></a>
                        </li>
                    </ul>
                    {
                        this.props.showIdentityMenu && <IdentityMenu showIdentityMenu = {this.props.showIdentityMenu} />
                    }                    
                </div>
            </nav>
        );
    }
}

header.propTypes = {
    loading: PropTypes.bool.isRequired,
    showIdentityMenu: PropTypes.bool.isRequired
};