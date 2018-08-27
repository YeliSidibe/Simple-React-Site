import React, { Component, PropTypes } from 'react';

export default class userProfile extends Component {

    constructor(props)
    {
        super(props);        
        this.state = {isLoggedIn : false};
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({isLoggedIn : nextProps.profile != null && nextProps.profile.success == true});
    }
   
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn)
        {
            return (                
                <ul className="navbar-nav mr-auto list-header-menu ul-header-custom">            
                    <li className="nav-item active">
                        <a className="nav-link" href="/profile" >
                            <div className="menu-icons"><i className="fa fa-user-circle"></i></div>
                            <div id="username-profile">{this.props.profile.userProfile.Email}&nbsp;&nbsp;</div>
                        </a>
                    </li>
                </ul> 
            );
        }        
        else
            return <div style={{display:'none'}}></div>;
        
    }
}

userProfile.propTypes = {
    profile: PropTypes.object.isRequired

};
