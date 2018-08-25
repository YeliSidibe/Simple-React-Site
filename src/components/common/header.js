import React, { Component, PropTypes } from 'react';
import IdentityMenu from './identityMenu';
import UserProfile from './userProfile';

import BootstrapHeaderLogo from '../../images/bootstrap-solid';

export default class header extends Component {    

    constructor(props)
    {
        super(props);
        this.state = { show : false};
        this.ShowHideCanvas = this.ShowHideCanvas.bind(this);
    }

    ShowHideCanvas()
    {
        let showOrHideCanvas  = !this.state.show;
        this.setState({show : showOrHideCanvas});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="header-nav">
                <a className="navbar-brand logo-nav-bar" href="#">
                    <BootstrapHeaderLogo/>
                </a>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation" onClick={this.ShowHideCanvas}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={this.state.show == false ? 'navbar-collapse offcanvas-collapse' : 'navbar-collapse offcanvas-collapse open'} id="navbarsExampleDefault">                                
                    <UserProfile profile= {this.props.profile}/>                    
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
                        <IdentityMenu profile = {this.props.profile} ShowHideCanvas={this.ShowHideCanvas} />
                    }                    
                </div>
            </nav>
        );
    }
}

header.propTypes = {
    loading: PropTypes.bool.isRequired,    
    profile: PropTypes.object.isRequired,
    ShowHideCanvas : PropTypes.func

};

