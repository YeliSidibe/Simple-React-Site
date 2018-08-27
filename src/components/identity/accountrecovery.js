import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegisterActions from '../../actions/RegisterActions';
import ErrorList from '../common/errorslist';
import {Link} from 'react-router';

class AccountRecovery extends Component {
  constructor(props, context) 
  {
      super(props, context);
      this.state = { profile: Object.assign({}, this.props.profile), errors: this.props.errors,saving: false};
      this.SendCode = this.SendCode.bind(this);
      this.onChange = this.onChange.bind(this);
      this.redirectToResetPassword = this.redirectToResetPassword.bind(this);          
  }

  componentWillReceiveProps(nextProps)
  {  
      if(nextProps.profile != null && nextProps.profile.errors != null)
      {
          this.setState({profile: Object.assign({},nextProps.profile),errors:nextProps.errors});
      }
  }
  
  validateForm(event)
  {
    event.preventDefault();
    event.stopPropagation();
    const form = document.getElementsByClassName('needs-validation')[0];
    let IsValid = form.checkValidity() === true;
    form.classList.add('was-validated');
    return IsValid;
  }

  SendCode(event)
  {    
    let IsValid = this.validateForm(event);    
    if (IsValid) 
    {
        this.setState({saving:true});                
        this.props.actions.SendOTP(this.state.profile)
        .then(() => { this.redirectToResetPassword(); })
        .catch((error) => { 
          this.setState({errors:error.errors,saving:false});
        });          
    }
    else 
    {
      this.setState({saving:false});
    }
  }

  redirectToResetPassword()
  {    
    this.context.router.push('/resetpassword');
  }

  onChange(event) 
  {
    const field = event.target.name;
    let profile = Object.assign({}, this.state.profile);
    profile[field] = event.target.value;
    return this.setState({ profile: profile });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="text-center">
                    <h3><i className="fa fa-lock fa-4x"></i></h3>
                    <h2 className="text-center">Account recovery</h2>
                    <p>We will send a one time passcode to your email address,This helps show that this account really belongs to you</p>
                    <div className="panel-body">
                      <form role="form" autoComplete="off" className="needs-validation form">
                      <ErrorList errors={this.state.errors} />
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                            <input id="email" name="Email" placeholder="email address" className="form-control" type="email" 
                              onChange={this.onChange} 
                              value={this.state.profile.Email} 
                              required />
                          </div>
                        </div>
                        <div className="form-group">
                          <input name="recover-submit" className="btn btn-lg btn-primary btn-block" type="submit" 
                          onClick={this.SendCode} 
                          value={this.state.saving ? "Submitting ..." : "Send code"}
                          disabled={this.state.saving ? true:false}/>                          
                        </div> 
                        <div className="form-group">                          
                          <Link to="signin" className="btn btn-lg btn-primary btn-block">
                            Cancel
                          </Link>
                        </div>                                               
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AccountRecovery.propTypes = {
  profile: PropTypes.object,
  actions: PropTypes.object,
  errors: PropTypes.array,
  success: PropTypes.bool
};

AccountRecovery.contextTypes = {  
  router: PropTypes.object
};

function mapStateToProps (state,ownProps){
  let profile = { Email: "ysidibe85@gmai.com"};  
  if(state.profile != null && state.profile.Email != null)
  {
    profile =  Object.assign({},state.profile);    
  } 
  return { 
          profile: profile, 
          errors: state.profile.errors ? state.profile.errors : []
        };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RegisterActions, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountRecovery);