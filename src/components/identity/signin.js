import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../../actions/RegisterActions';
import * as IdentityMenuActions from '../../actions/menuActions';



export class signin extends Component {
  
  constructor(props, context) 
  {
      super(props, context);
      this.state = { profile: Object.assign({}, this.props.profile), errors: this.props.errors, success: this.props.success,saving: false };
      this.Authenticate = this.Authenticate.bind(this);
      this.onChange = this.onChange.bind(this);
      this.redirectToMainPage = this.redirectToMainPage.bind(this);
  }

  componentDidMount()
  {           
      this.props.hideIdentityMenuAction.HideIdentityMenu();
  }

  componentWillReceiveProps(nextProps)
  {       
      if(nextProps.success != null)
      {
          this.setState({profile: Object.assign({},nextProps.profile),errors:nextProps.errors,success:nextProps.success});
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
        .then(() => { this.redirectToMainPage(); })
        .catch((error) => { this.setState({errors:error.errors,saving:false}); });      
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

  render() {
    return (
      <div className="container center-form-container mt-3">
        <div className="row px-2">
          <b className="col px-2">Log In</b>
          <a href="/register"><span className="right pr-2 text-primary">Sign up</span></a>
        </div>
        <LoginForm
              profile={this.state.profile}
              onSave={this.Authenticate}
              onChange={this.onChange}
              loading={this.state.saving}
              errors={this.state.errors} />
     </div>
    );
  }
}

signin.propTypes = {
  profile: PropTypes.object,
  actions: PropTypes.object,
  errors: PropTypes.array,
  success: PropTypes.bool,
  hideIdentityMenuAction : PropTypes.object,
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
    actions: bindActionCreators(RegisterActions, dispatch),
    hideIdentityMenuAction: bindActionCreators(IdentityMenuActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(signin);
