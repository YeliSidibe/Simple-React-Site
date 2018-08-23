import React, { Component,PropTypes } from 'react';

const SignInRender = ()=>
{
    return (
            <li className="nav-item">
                <a className="nav-link" href="/signin">
                    <button className="btn btn-outline-primary px-2 py-0 btn-log-in-out" type="submit">
                        Log in
                    </button>
                </a>
            </li>
            );  
};

export default SignInRender;