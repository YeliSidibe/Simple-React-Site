import React, { Component,PropTypes } from 'react';

const SignInRender = ()=>
{
    return (<li className="nav-item active">
                    <a className="nav-link" href="/signin">
                        <button className="btn btn-outline-success my-sm-0 nav-link px-2 py-0  mr-auto btn-log-in-out" type="submit">
                            Log in
                        </button>
                    </a>
</li>);  
}

const SignUpRender=()=>
{
    return (
        <li className="nav-item border-0">
        <a className="nav-link" href="/register">
            <span className="sign-up">Sign Up</span>
        </a>
    </li>
    );
}

const LogOutRender=()=>
{
    return (
        <li className="nav-item active">
        <a className="nav-link" href="/">
            <button className="btn btn-outline-success my-sm-0 nav-link px-2 py-0  mr-auto btn-log-in-out"  type="submit">
                LogOut
            </button>
        </a>
    </li>
    );
}

const identityMenu = ({showIdentityMenu}) => {
    return (        
            <ul className="navbar-nav right identity-list-menu">
                {showIdentityMenu && <SignInRender/>}
                {showIdentityMenu && <SignUpRender/>}
                {!showIdentityMenu && <LogOutRender/>}
            </ul>
    );
};

export default identityMenu;
