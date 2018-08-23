import React, { Component,PropTypes } from 'react';

const SignInRender = ()=>
{
    return (
                <button className="btn btn-outline-primary px-2 py-0 btn-log-in-out" type="submit">
                    Log in
                </button>
            );  
}

const SignUpRender=()=>
{
    return (
        <span>Sign Up</span>
    );
}

const LogOutRender=()=>
{
    return (        
            <button className="btn btn-outline-primary px-2 py-0 btn-log-in-out"  type="submit">
                Logout
            </button>        
    );
}

const identityMenu = ({showIdentityMenu}) => {
    return (                    
            <ul className="navbar-nav right list-header-menu" id="identity-ul">                       
                        <li className="nav-item">
                            <a className="nav-link" href="/vehicles">                                
                                {showIdentityMenu && <SignInRender/>}
                            </a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link d-flex justify-content-center" href="/register">
                                {showIdentityMenu && <SignUpRender/>}
                            </a>
                        </li>                         
                        <li className="nav-item">
                            <a className="nav-link d-flex justify-content-center" href="/register">
                                {!showIdentityMenu && <LogOutRender/>}
                            </a>
                        </li>                         
                    </ul>
    );
};

export default identityMenu;
