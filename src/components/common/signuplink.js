<<<<<<< HEAD
import React, { Component,PropTypes } from 'react';

export default class SignUpRender extends Component
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
        this.context.router.push('/register');
    }
    
    render()
    {
        return (
            <li className="nav-item">
                <a className="nav-link d-flex justify-content-center" onClick={this.showHideCanvasComponent}>
                    <span>Sign Up</span>
                </a>
            </li>
            );  
    }
}


SignUpRender.propTypes = {    
    ShowHideCanvas : PropTypes.func.isRequired   
};

SignUpRender.contextTypes = {
    router: PropTypes.object
=======
import React, { Component,PropTypes } from 'react';

export default class SignUpRender extends Component
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
        this.context.router.push('/register');
    }
    
    render()
    {
        return (
            <li className="nav-item">
                <a className="nav-link d-flex justify-content-center" onClick={this.showHideCanvasComponent}>
                    <span>Sign Up</span>
                </a>
            </li>
            );  
    }
}


SignUpRender.propTypes = {    
    ShowHideCanvas : PropTypes.func.isRequired   
};

SignUpRender.contextTypes = {
    router: PropTypes.object
>>>>>>> b2c27e5611c6c549d341f541553945af4604d50e
  };