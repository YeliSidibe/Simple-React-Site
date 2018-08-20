import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CreateProfileForm from "./registerForm";
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../../actions/RegisterActions';
import * as IdentityMenuActions from '../../actions/menuActions';

export class register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { profile: Object.assign({}, this.props.profile), errors: this.props.errors, success: this.props.success,saving: false };
        this.Register = this.Register.bind(this);
        this.onChange = this.onChange.bind(this);
        this.redirectToUrlSuccess = this.redirectToUrlSuccess.bind(this);
        this.createFacebookProfile = this.createFacebookProfile.bind(this);
        this.facebookCallbackFunction = this.facebookCallbackFunction.bind(this);        
    }

    componentDidMount()
    {           
        this.props.hideIdentityMenuAction.HideIdentityMenu();
    }

    componentWillReceiveProps(nextProps)
    {        
        
        if(nextProps.success != null && nextProps.profile != null && nextProps.profile.externalProviderLogin != true)
        {                         
            this.setState({profile: Object.assign({},nextProps.profile),errors:nextProps.errors,success:nextProps.success});
        }
        else if(nextProps.profile != null && nextProps.profile.externalProviderLogin == true)
        {
            this.setState({errors:nextProps.errors,success:nextProps.success}); // when facebook login update state errors and success flag
        }
    }

    Register(event) {
        this.setState({errors : []});
        event.preventDefault();
        event.stopPropagation();
        const form = document.getElementsByClassName('needs-validation')[0];
        let IsValid = form.checkValidity() === true;
        form.classList.add('was-validated');

        if (IsValid) 
        {
            if(this.state.profile.PhoneNumber.length > 0 && this.state.profile.PhoneNumber.length < 10 )
            {                
               this.setState({errors : ["Please provide a valid phone number ..."]});
            }
            else
            {
                this.setState({saving:true});
                const p = Object.assign({},this.state.profile);
                p.ConfirmPassword = this.state.profile.Password;            
                this.setState({profile: p});
                this.props.actions.CreateProfile(p)
                .then(() => { this.redirectToUrlSuccess('/signin'); })
                .catch((error) => { this.setState({errors:error.errors});})
                .then(() => {this.setState({saving:false});});                     
            }
            
        }
    }

    onChange(event) {
        const field = event.target.name;
        let profile = Object.assign({}, this.state.profile);
        profile[field] = event.target.value;
        return this.setState({ profile: profile });
    }

    redirectToUrlSuccess(url) {  
        if (this.state.success) 
        {            
            this.redirectToUrl(url);
        }        
    }

    redirectToUrl(url) {        
        this.context.router.push(url);      
    }

    componentClicked(event){}
    onFailure(e) { throw('Systemic Error occured ...'); }
    facebookCallbackFunction(response)
    {
        if(response.id)
        {
            let facebookProfile  = {Email: response.email,FirstName:response.first_name,LastName:response.last_name,externalProviderLogin:true};            
            this.createFacebookProfile(facebookProfile);
        }
        else
        {
            this.setState({errors:["Unable to authenticate using facebook."]});
        }
    }

    createFacebookProfile(p)
    {        
        this.props.actions.CreateProfile(p)
        .then(() => { this.redirectToUrlSuccess('/vehicles'); }) 
        .catch((error) => { this.setState({errors:error.errors});});
    }

    render() {
        return (
            <div className="container center-form-container mt-3">
                <b>Create a profile</b>
                <CreateProfileForm
                    profile={this.state.profile}
                    onSave={this.Register}
                    onChange={this.onChange}
                    loading={this.state.saving}
                    errors={this.state.errors}
                    componentClicked = {this.componentClicked}
                    onFailure = {this.onFailure}
                    facebookCallbackFunction={this.facebookCallbackFunction} />
            </div>
        );
    }
}

register.propTypes = {
    profile: PropTypes.object,
    actions: PropTypes.object,
    errors: PropTypes.array,
    success: PropTypes.bool,
    hideIdentityMenuAction : PropTypes.object,
    loading : PropTypes.bool
};

register.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let profile = { FirstName: "", MiddleName: "", LastName: "", Email: "", Password: "", PhoneNumber: "",ConfirmPassword:"" };        
    return { 
             profile: state.profile.success != null ? state.profile.userProfile : profile, 
             errors: state.profile.errors ? state.profile.errors : [], 
             success: state.profile.success 
            };    
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(RegisterActions, dispatch),
        hideIdentityMenuAction : bindActionCreators(IdentityMenuActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(register);
