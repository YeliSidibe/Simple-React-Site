import React from "react";
import TextInputHtmlControl from "../common/textInputHtmlControl";

const registerForm = ({ profile, onSave, onChange, loading, errors }) => {
    return (
        <div>
            <form className="needs-validation py-2 rounded register-form" novalidate="noValidate">
                <div className="form-row my-2 px-2 py-2">
                    <div className="col-md-6 mb-1">
                        <div className="input-group">
                            <input type="text" name="FirstName" className="form-control" placeholder="First name" onChange={onChange} value={profile.FirstName} required />
                        </div>
                    </div>
                    <div className="col-md-6 mb-1">
                        <input type="text" name="MiddleName" className="form-control" placeholder="Middle name (optional)" onChange={onChange} value={profile.MiddleName} />
                    </div>
                    <div className="col-md-12 mb-1">
                        <div className="input-group">
                            <input type="text" name="LastName" className="form-control" placeholder="Lastname" onChange={onChange} value={profile.LastName} required />
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
                            <input className="py-2 form-control" name="EmailAddress" type="text" placeholder="Your Email address" onChange={onChange} value={profile.EmailAddress} required />
                        </div>
                    </div>
                    <div className="col-md-6 mb-1">
                        <div className="input-group">
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-right-0 border" type="button" disabled>
                                    <i className="fa fa-unlock-alt fa-fw"></i>
                                </button>
                            </span>
                            <input className="py-2 form-control" name="Password" type="password" placeholder="Create your password" required onChange={onChange} value={profile.Password} />
                            <span className="input-group-append">
                                <button className="btn btn-outline-secondary border-left-0 border" type="button">
                                    <i className="fa fas fa-eye"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="form-row my-2 px-2 py-2">
                    <div className="col-md-12 mb-1">
                        <div className="input-group">
                            <div className="input-group-prepend w-50">
                                <span className="input-group-text">Mobile</span>
                                <input type="text" name="AreaCode" className="input-group-text bg-transparent form-control" placeholder="Code" required onChange={onChange} value={profile.AreaCode} />
                            </div>
                            <input type="text" name="PhoneNumber" className="form-control w-50" placeholder="### ####" required onChange={onChange} value={profile.PhoneNumber} />                            
                        </div>
                    </div>                    
                </div>
                <div className="form-row">
                    <div className="col-md-12 mb-1">
                        <p>By creating a profile you have read and agree to the <a href="#"><span className="text-primary">Online Privacy Statement</span></a>, <a><span className="text-primary">the MobIt SAW Terms & Conditions</span></a> and agree to receive communications electronically according to the E-Sign Disclosure and Consent Notice.</p>
                    </div>
                </div>
                <div className="form-row my-2 px-2 py-2">
                    <input type="submit" className="form-control btn btn-primary" value="Complete" onClick={onSave} />
                </div>
            </form>
        </div>
    );
};

registerForm.propTypes = {
    profile: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default registerForm;
