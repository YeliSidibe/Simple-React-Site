import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    constructor(props,context)
    {
       super(props,context);
       this.state = {isLoggedIn : false,userId : '',name:'',email:'',picture:''};
       this.componentClicked = this.componentClicked.bind(this);
       this.facebookCallbackFunction = this.facebookCallbackFunction.bind(this);
    }

    componentClicked(event)
    {
        alert('clicked');
    }

    facebookCallbackFunction(event)
    {
        alert('callback function called');
    }
    
    renderFacebookElement(renderProps)
    {
      return <button onClick={renderProps.onClick}></button>;
    }

    render() {
      let fbContent;
      if(this.state.isLoggedIn)
      {
        fbContent = null;
      }
      else
      {
        fbContent = (<FacebookLogin
         appId="256896758476426"
         autoLoad
         fields="name,email,picture"
         onClick={this.componentClicked}
         callback={this.facebookCallbackFunction} 
         cssClass="form-control btn btn-primary btn-facebook"
         textButton='  Facebook'
         icon = {<i className="fa fa-facebook"></i>}
         render={this.renderFacebookElement}/>);
      }
    return (
        <div>
            {fbContent}
        </div>
    );
  }
}

Facebook.propTypes = 
{

};

