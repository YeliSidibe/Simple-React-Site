import React, { Component, PropTypes } from 'react';
import TextInputHtmlControl from "../common/textInputHtmlControl";
import ErrorList from '../common/errorslist';

export default class registerForm extends Component
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
    
    render()
    {
        return(
            <div>
            <form className="needs-validation py-2 rounded register-form" novalidate="noValidate">
                <ErrorList errors = {this.props.errors}/>
                <div className="form-row my-2 px-2 py-2">
                    <div className="col-md-6 mb-1">
                        <div className="input-group">
                            <input type="text" name="FirstName" className="form-control" placeholder="First name" onChange={this.props.onChange} value={this.props.profile.FirstName} required />
                        </div>
                    </div>
                    <div className="col-md-6 mb-1">
                        <input type="text" name="MiddleName" className="form-control" placeholder="Middle name (optional)" onChange={this.props.onChange} value={this.props.profile.MiddleName} />
                    </div>
                    <div className="col-md-12 mb-1">
                        <div className="input-group">
                            <input type="text" name="LastName" className="form-control" placeholder="Lastname" onChange={this.props.onChange} value={this.props.profile.LastName} required />
                        </div>
                    </div>
                </div>
                <div className="form-row my-2 px-2 py-2">
                    <div className="col-md-6 mb-1">
                        <div className="input-group">
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-right-0 border" type="button" disabled>
                                    <i className="fa fa-envelope-o fa-fw"></i>
                                </button>
                            </span>
                            <input className="py-2 form-control" name="EmailAddress" type="text" placeholder="Your Email address" onChange={this.props.onChange} value={this.props.profile.EmailAddress} required />
                        </div>
                    </div>
                    <div className="col-md-6 mb-1">
                        <div className="input-group">
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-right-0 border" type="button" disabled>
                                    <i className="fa fa-unlock-alt fa-fw"></i>
                                </button>
                            </span>
                            <input className="py-2 form-control" name="Password" type={this.state.type} placeholder="Create your password" required onChange={this.props.onChange} value={this.props.profile.Password} />
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-left-0 border" type="button" onClick={this.onShowHide}>
                                    <i className={this.state.type === 'password' ? 'fa fas fa-eye fa-fw' : 'fa fas fa-eye-slash fa-fw'}></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="form-row my-2 px-2 py-2">
                    <div className="col-md-12 mb-1">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Mobile</span>                                
                            </div>                            
                            <input type="tel" name="PhoneNumber" className="form-control" placeholder="(###) ### ####" required onChange={this.props.onChange} value={this.props.profile.PhoneNumber} required/>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12 mb-1">
                        <p>By creating a profile you have read and agree to the <a href="#"><span className="text-primary">Online Privacy Statement</span></a>, <a><span className="text-primary">the MobIt SAW Terms & Conditions</span></a> and agree to receive communications electronically according to the E-Sign Disclosure and Consent Notice.</p>
                    </div>
                </div>
                <div className="form-row my-2 px-2 py-2">
                    <input type="submit" className="form-control btn btn-primary" value="Complete" onClick={this.props.onSave} />
                </div>
            </form>
        </div>
        );
    }
}

registerForm.propTypes = {
    profile: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.array.isRequired
};

