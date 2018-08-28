import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ErrorList from '../common/errorslist';
import * as RegisterActions from '../../actions/RegisterActions';
import {Link} from 'react-router';

class ResetPassword extends Component {

  constructor(props, context) 
  {
    super(props);
    this.state = {profile: Object.assign({}, this.props.profile), errors: this.props.errors,saving: false};    
    this.onChange = this.onChange.bind(this);    
    this.ResetUserPassword = this.ResetUserPassword.bind(this);
    this.ReSendCode = this.ReSendCode.bind(this);    
  }

  componentWillReceiveProps(nextProps)
  {  
      if(nextProps.profile != null && nextProps.profile.errors != null)
      {
          this.setState({profile: Object.assign({},nextProps.profile),errors:nextProps.errors});
      }
  }

  onChange(event) 
  {
    const field = event.target.name;
    let profile = Object.assign({}, this.state.profile);
    profile[field] = event.target.value;
    return this.setState({ profile: profile });
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

  ReSendCode(event)
  {
    let IsValid = this.validateForm(event);
    if(IsValid)
    {
      this.setState({saving:true}); 

      this.setState({saving:false}); 
    }
  }

  ResetUserPassword(event)
  {
    let IsValid = this.validateForm(event);
    if(IsValid && this.state.profile.NewPassword != this.state.profile.ConfirmPassword) 
    { 
      IsValid = false;
      this.setState({errors:['The password do not match']});
    }

    if(IsValid)
    {
      this.setState({saving:true}); 
      this.actions.ResetUserPassword(this.state.profile)
      .then(() => {this.context.router.push('/signin');})
      .catch((error) => {this.setState({errors:error.errors,saving:false});});
      this.setState({saving:false}); 
    }
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
                    <h2 className="text-center">Reset Password</h2>
                    <p>a passcode was sent to <span className="font-weight-bold text-primary">{this.state.profile.Email}</span>, enter passcode below</p>
                    <div className="panel-body">
                      <form role="form" autoComplete="off" className="needs-validation form">
                        <ErrorList errors={this.state.errors} />
                        <div className="form-group">
                          <div className="input-group">
                            <input id="passcode" name="PassCode" placeholder="6 digits passcode" className="form-control text-center" type="text" 
                              onChange={this.onChange}  
                              value={this.state.profile.PassCode}                              
                              required />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <input id="password" name="NewPassword" placeholder="New password " className="form-control text-center" type="password" 
                              value={this.state.profile.NewPassword}
                              onChange={this.onChange}                                
                              required />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <input id="confirmpassword" name="ConfirmPassword" placeholder="Confirm New password" className="form-control text-center" type="password" 
                              value={this.state.profile.ConfirmPassword}
                              onChange={this.onChange}                                
                              required />
                          </div>
                        </div>
                        <div className="form-group">
                          <input name="submit" className="btn btn-lg btn-primary btn-block" type="submit"
                            onClick={this.ResetUserPassword}
                            value={this.state.savingResend ? "Submitting ..." : "Reset Password"}
                            disabled={this.state.savingResend ? true : false} />
                        </div>
                        <div className="form-group">                          
                          <Link to="signin" className="btn btn-lg btn-primary btn-block">
                            Cancel
                          </Link>
                        </div>
                        <div className="form-group mt-5">
                          <input name="resend-recover-submit" className="btn btn-lg btn-danger btn-block" type="button"
                            onClick={this.ReSendCode}
                            value={this.state.savingResend ? "Submitting ..." : "I did not get the code, ReSend"}
                            disabled={this.state.savingResend ? true : false} />
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

ResetPassword.propTypes = {
  profile: PropTypes.object,
  actions: PropTypes.object,
  errors: PropTypes.array,
  success: PropTypes.bool
};

ResetPassword.contextTypes = {  
  router: PropTypes.object
};

function mapStateToProps (state,ownProps){ 
  let profile = { Email: "",NewPassword:"",ConfirmPassword:"",PassCode:""};  
  if(state.profile != null && state.profile.Email != null)
  {    
    profile.Email =  state.profile.Email;
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);