import React, { Component,PropTypes } from 'react';
import LogOutRender from './logout';
import SignInRender from './signinlink';
import SignUpRender from './signuplink';


export default class identityMenu extends Component {

    constructor(props)
    {        
        super(props);
        let isLoggedIn = props.profile != null && props.profile.success == true;        
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
                        {this.props.showIdentityMenu && <SignInRender/>}                        
                        {this.props.showIdentityMenu && <SignUpRender/>}                                                     
                        {this.state.isLoggedIn == true && <LogOutRender profile={this.props.profile} />}
            </ul>
        );
    }
}

identityMenu.propTypes = {
    profile : PropTypes.object.isRequired,
    showIdentityMenu: PropTypes.bool.isRequired
};


