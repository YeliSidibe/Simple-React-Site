import React, { Component,PropTypes } from 'react';

const SignInRender = ()=>
{
    return (<li className="nav-item active">
                    <a className="nav-link" href="/signin">
                        <button className="btn btn-outline-primary px-2 py-0 btn-log-in-out" type="submit">
                            Log in
                        </button>
                    </a>
</li>);  
}

const SignUpRender=()=>
{
    return (
        <li className="nav-item" id="sign-up">
        <a className="nav-link d-flex justify-content-center" href="/register">
            <span>Sign Up</span>
        </a>
    </li>
    );
}

const LogOutRender=()=>
{
    return (
        <li className="nav-item active">
        <a className="nav-link" href="/">
            <button className="btn btn-outline-primary px-2 py-0 btn-log-in-out"  type="submit">
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
