import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../../actions/RegisterActions';


class Logout extends Component
{
    constructor(props,context)
    {
        super(props,context);
        this.Logout = this.Logout.bind(this);
    }
    
    Logout() 
    {
       // log out user completely       
       this.props.LogoutAction(this.props.profile);
       this.context.router.push('/');
    }    
    
    render()
    {        
        return(     
         
                <li className="nav-item">
                    <a className="nav-link d-flex justify-content-center" onClick={this.Logout}>
                        <button className="btn btn-outline-primary px-2 py-0 btn-log-in-out" type="submit">
                            Logout
                        </button>
                    </a>
                </li>
            );        
    }
}

Logout.propsTypes = {
    profile: PropTypes.object.isRequired,
    LogoutAction: PropTypes.object    
};

Logout.contextTypes = {
    router: PropTypes.object
};
function mapStateToProps(state,ownProps)
{      
  return {
    loading: state.ajaxCallsInProgress > 0,
    showIdentityMenu : state.showIdentityMenu,
    profile: state.profile
  };
}


function mapDispatchToProps(dispatch) {
    return {
        LogoutAction: bindActionCreators(RegisterActions.Logout, dispatch)
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Logout);