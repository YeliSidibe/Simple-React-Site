import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    constructor(props,context)
    {
       super(props,context);
       this.state = {isLoggedIn : false,userId : '',name:'',email:'',picture:''};
      
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
         onClick={this.props.componentClicked}
         onFailure = {this.props.onFailure}
         callback={this.props.facebookCallbackFunction} 
         cssClass="form-control btn btn-primary btn-facebook"
         textButton="  Facebook"
         isMobile = {true}
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

Facebook.propTypes= {
    componentClicked : PropTypes.func.isRequired,
    facebookCallbackFunction : PropTypes.func.isRequired,
    onFailure : PropTypes.func.isRequired
};

