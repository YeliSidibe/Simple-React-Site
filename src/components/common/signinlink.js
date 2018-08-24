import React, { Component,PropTypes } from 'react';

export default class SignInRender extends Component
{
    constructor(props,context)
    {
        super(props,context);
        this.showHideCanvasComponent = this.showHideCanvasComponent.bind(this);
    }

    showHideCanvasComponent(event)
    {
        event.preventDefault();
        this.props.ShowHideCanvas();
        this.context.router.push('/signin');
    }
    
    render()
    {
        return (
            <li className="nav-item">
                <a className="nav-link" onClick={this.showHideCanvasComponent}>
                    <button className="btn btn-outline-primary px-2 py-0 btn-log-in-out" type="submit">
                        Log in
                    </button>
                </a>
            </li>
            );  
    }
}


SignInRender.propTypes = {    
    ShowHideCanvas : PropTypes.func.isRequired   
};

SignInRender.contextTypes = {
    router: PropTypes.object
  };