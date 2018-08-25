import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../../actions/RegisterActions';
import * as VehicleActions from '../../actions/vehicleActions';

export class signin extends Component {
  
  constructor(props, context) 
  {
      super(props, context);
      this.state = { profile: Object.assign({}, this.props.profile), errors: this.props.errors, success: this.props.success,saving: false };
      this.Authenticate = this.Authenticate.bind(this);
      this.onChange = this.onChange.bind(this);
      this.redirectToMainPage = this.redirectToMainPage.bind(this);
      this.componentClicked = this.componentClicked.bind(this);
      this.facebookCallbackFunction = this.facebookCallbackFunction.bind(this);
      this.onFailure = this.onFailure.bind(this);
      this.redirectToRegster  = this.redirectToRegster.bind(this);
  }

  componentDidMount(){}
  
  redirectToRegster()
  {    
    this.context.router.push('/register');
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

  onChange(event) 
  {
    const field = event.target.name;
    let profile = Object.assign({}, this.state.profile);
    profile[field] = event.target.value;
    return this.setState({ profile: profile });
  }

  Authenticate(event)
  {
    event.preventDefault();
    event.stopPropagation();
    const form = document.getElementsByClassName('needs-validation')[0];
    let IsValid = form.checkValidity() === true;
    form.classList.add('was-validated');
    if (IsValid) 
    {
        this.setState({saving:true});        
        this.props.actions.Login(this.state.profile)
        .then(() => { this.redirectToMainPage();})
        .catch((error) => { this.setState({errors:error.errors,saving:false});});          
    }
    else 
    {
      this.setState({saving:false});
    }

  }

  redirectToMainPage()
  {     
    if(this.state.success)
    {            
      this.context.router.push('/vehicles');
    }         
  }
  
  componentClicked(event)
  {
        
  }
  onFailure(e) { throw('Systemic Error occured ...');  }
  facebookCallbackFunction(response)
  {
      if(response.id)
      {        
          let facebookProfile  = {Email: response.email,FirstName:response.first_name,LastName:response.last_name,externalProviderLogin:true};            
          this.LoginWithFacebook(facebookProfile);
      }
      else
      {
          this.setState({errors:["Unable to authenticate using facebook."]});
      }
  }

  LoginWithFacebook(p)
  {        
      this.props.actions.Login(p)
      .then(() => { this.redirectToMainPage(); }) 
      .catch((error) => { this.setState({errors:error.errors});});
  }

  render() {
    return (
      <div className="container center-form-container mt-3">
        <div className="row px-2">
          <b className="col px-2">Log In</b>
          <a onClick={this.redirectToRegster}><span className="right pr-2 text-primary">Sign up</span></a>
        </div>
        <LoginForm
              profile={this.state.profile}
              onSave={this.Authenticate}
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

signin.propTypes = {
  profile: PropTypes.object,
  actions: PropTypes.object,
  errors: PropTypes.array,
  success: PropTypes.bool,
  loading : PropTypes.bool
};

signin.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state,ownProps){  
  let profile = { Email: "ysidibe85@gmail.com", Password: "P@ssword1" };  
  if(state.profile.success != null)
  {
    profile =  Object.assign({},state.profile.userProfile);    
  }  
  return { 
          profile: profile, 
          errors: state.profile.errors ? state.profile.errors : [], 
          success: state.profile.success 
        };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RegisterActions, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(signin);
