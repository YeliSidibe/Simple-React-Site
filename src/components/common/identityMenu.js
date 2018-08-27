import React, { Component,PropTypes } from 'react';
import LogOutRender from './logout';
import SignInRender from './signinlink';
import SignUpRender from './signuplink';


export default class identityMenu extends Component {

    constructor(props)
    {        
        super(props);
<<<<<<< HEAD
        let isLoggedIn = props.profile != null && props.profile.success == true;  
        console.log('isLoggedIn here ' + isLoggedIn); 
=======
        let isLoggedIn = props.profile != null && props.profile.success == true;        
>>>>>>> b2c27e5611c6c549d341f541553945af4604d50e
        this.state = {isLoggedIn : isLoggedIn};        
    }
    componentWillReceiveProps(nextProps)
    {
        this.setState({isLoggedIn : nextProps.profile != null && nextProps.profile.success == true});
    }
    render()
    {
        return (                    
            <ul className="navbar-nav right list-header-menu" id="identity-ul">                       
                        {this.state.isLoggedIn == false && <SignInRender ShowHideCanvas = {this.props.ShowHideCanvas}/>}
                        {this.state.isLoggedIn == false && <SignUpRender ShowHideCanvas = {this.props.ShowHideCanvas}/>}                                                     
                        {this.state.isLoggedIn == true && <LogOutRender profile={this.props.profile} ShowHideCanvas = {this.props.ShowHideCanvas}/>}
            </ul>
        );
    }
}

identityMenu.propTypes = {
    profile : PropTypes.object.isRequired,
    ShowHideCanvas : PropTypes.func.isRequired   
};


