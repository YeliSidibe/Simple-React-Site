import React, { Component,PropTypes } from 'react';

const identityMenu = () => {
    return (        
            <ul className="navbar-nav rigth">
                <li className="nav-item active">
                    <a className="nav-link" href="/signin">
                        <button className="btn btn-outline-success my-sm-0 nav-link px-2 py-0  mr-auto" id="btn-log-in" type="submit">Log in
                        </button>
                    </a>
                </li>
                <li className="nav-item border-0">
                    <a className="nav-link" href="/register">
                        <span className="sign-up">Sign Up</span>
                    </a>
                </li>
            </ul>
    );
};

export default identityMenu;
