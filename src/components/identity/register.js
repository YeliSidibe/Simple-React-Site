import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CreateProfileForm from "./registerForm";
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../../actions/RegisterActions';

export class register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { profile: Object.assign({}, this.props.profile), errors: this.props.errors, success: this.props.success };
        this.Register = this.Register.bind(this);
        this.updateProfileState = this.updateProfileState.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }
    
    componentWillReceiveProps(nextProps)
    {        
        if(nextProps.success != null)
        {
            this.setState({profile: Object.assign({},nextProps.profile),errors:nextProps.errors,success:nextProps.success});
        }
    }

    Register(event) {
        event.preventDefault();
        event.stopPropagation();
        const form = document.getElementsByClassName('needs-validation')[0];
        const IsValid = form.checkValidity() === true;
        form.classList.add('was-validated');
        if (IsValid) {
            this.props.actions.CreateProfile(this.state.profile).then(() => { this.redirectToLogin(); });            
        }
    }

    updateProfileState(event) {
        const field = event.target.name;
        let profile = Object.assign({}, this.state.profile);
        profile[field] = event.target.value;
        return this.setState({ profile: profile });
    }
    redirectToLogin() {        
        if (this.state.success) 
        {            
            this.context.router.push('/signin');
        }        
    }

    render() {
        return (
            <div className="container center-form-container mt-3">
                <b>Create a profile</b>
                <CreateProfileForm
                    profile={this.state.profile}
                    onSave={this.Register}
                    onChange={this.updateProfileState}
                    loading={false}
                    errors={this.state.errors} />
            </div>
        );
    }
}

register.propTypes = {
    profile: PropTypes.object,
    actions: PropTypes.object,
    errors: PropTypes.array,
    success: PropTypes.bool
};

register.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let profile = { FirstName: "Yeli", MiddleName: "Cheick", LastName: "Sidibe", EmailAddress: "ysidibe85@gmail.com", Password: "P@ssword1", AreaCode: "850", PhoneNumber: "3396882" };    
    return { profile: state.profile.success != null ? state.profile.userProfile : profile, 
             errors: state.profile.errors ? state.profile.errors : [], 
             success: state.profile.success };    
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(RegisterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(register);
