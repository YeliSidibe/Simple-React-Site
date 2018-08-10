import React, { Component, PropTypes } from 'react';
import IdentityMenu from './identityMenu';
import BootstrapHeaderLogo from '../../images/bootstrap-solid';

export default class header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand logo-nav-bar" href="#">
                    <BootstrapHeaderLogo/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">CarBank <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/vehicles">Swap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/vehicles">Track Swap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
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