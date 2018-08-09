import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IdentityMenuActions from '../../actions/menuActions';

class identityMenu extends Component {
    constructor(props) {
        super(props);
        this.HideIdentityMenu = this.HideIdentityMenu.bind(this);
    }

    HideIdentityMenu(event) {     
        event.preventDefault();           
        this.props.actions.HideIdentityMenu();
        this.context.router.push('/register');
    }
    render() {
        return (
            <ul className="navbar-nav rigth">
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        <button className="btn btn-outline-success my-sm-0 nav-link px-2 py-0  mr-auto" id="btn-log-in" type="submit">Log in
                        </button>
                    </a>
                </li>
                <li className="nav-item border-0">
                    <a className="nav-link" href="/register">
                        <span className="sign-up" onClick={this.HideIdentityMenu}>Sign Up</span>
                    </a>
                </li>
            </ul>
        );
    }

}

identityMenu.propTypes = {
    showIdentityMenu: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};
identityMenu.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state, ownProps) {    
    return {
        showIdentityMenu: state.showIdentityMenu
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(IdentityMenuActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(identityMenu);
