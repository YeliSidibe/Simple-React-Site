import React, { Component, PropTypes } from 'react';
import TextInputHtmlControl from "../common/textInputHtmlControl";
import ErrorList from '../common/errorslist';
import Facebook from './facebook';

export default class loginForm extends Component
{
    constructor(props,context)
    {
        super(props,context);   
        this.state = {type:'password'};
        this.onShowHide = this.onShowHide.bind(this);         
    }

    onShowHide(e) 
    {
        e.preventDefault();
        e.stopPropagation();
        this.setState({type : this.state.type === 'input' ? 'password' : 'input'});
    }
    
    render() {
        return (
            <div>
                <form className="needs-validation py-2 rounded register-form" novalidate="noValidate">
                    <ErrorList errors={this.props.errors} />
                    <div className="form-row my-2 px-2 py-2">
                        <div className="col-md-12 mb-1">
                            <div className="input-group">
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary border-right-0 border" type="button" disabled>
                                        <i className="text-primary font-weight-bold fa fa-envelope-o fa-fw"></i>
                                    </button>
                                </span>
                                <input className="py-2 form-control" name="Email" type="text" placeholder="Email address" onChange={this.props.onChange} value={this.props.profile.Email} required />
                            </div>
                        </div>
                        <div className="col-md-12 mb-1 d-flex justify-content-end">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="text-primary form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                        </div>
                        <div className="col-md-12 mb-1">
                            <div className="input-group">
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary border-right-0 border" type="button" disabled>
                                        <i className="text-primary font-weight-bold fa fa-unlock-alt fa-fw"></i>
                                    </button>
                                </span>
                                <input className="py-2 form-control" name="Password" type={this.state.type} placeholder="Enter password" required onChange={this.props.onChange} value={this.props.profile.Password} />
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary border-left-0 border" type="button" onClick={this.onShowHide}>
                                        <i className={this.state.type === 'password' ? 'fa fas fa-eye fa-fw' : 'fa fas fa-eye-slash fa-fw'}></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-12 mb-1 d-flex justify-content-end">
                            <div className="form-check">
                                <a><span className="text-primary form-check-label" htmlFor="forgotPassword">Forgot Password?</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="form-row my-2 px-2 py-2">
                        <input type="submit" className="form-control btn btn-primary" value={this.props.loading ? "Submitting ..." : "Continue"} onClick={this.props.onSave} />
                    </div>
                    <div className="or-seperator">
                        <i>or</i>   
                    </div>
                    <p className="d-flex justify-content-center">Login with your social media account</p>
                    <div className="form-row my-2 px-2 py-2">
                        <div className="col-md-12">
                        <Facebook
                        componentClicked = {this.props.componentClicked}
                        onFailure = {this.props.onFailure}
                        facebookCallbackFunction={this.props.facebookCallbackFunction} 
                        />
                        </div>                           
                    </div>
                    <div className="form-row my-2 px-2 py-2">
                        <div className="col-md-12"><a href="#" className="form-control btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</a></div>
                    </div>                    
                </form>
            </div>
        );
    }
}

loginForm.propTypes = {
    profile: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    errors: PropTypes.array,
    componentClicked : PropTypes.func.isRequired,
    facebookCallbackFunction : PropTypes.func.isRequired,
    onFailure : PropTypes.func.isRequired
};

