import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class register extends Component {
    constructor(props,context)
    {
        super(props,context);
        this.Register = this.Register.bind(this);
    }
    Register(event)
    {
        event.preventDefault();
        this.context.router.push('/signin');
    }
    
    render() {
        return (
            <div className="container center-form-container">
                <b>Create a profile</b>
                <form className="needs-validation py-2 rounded register-form" novalidate="novalidate">
                    <div className="form-row my-2 px-2 py-2">
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control is-invalid" placeholder="First name" required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" placeholder="Middle name (optional)" required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Lastname" aria-describedby="inputGroupPrepend" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-row my-2 px-2 py-2">
                        <div className="col-md-6 mb-3">
                            <div className="input-group">
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary border-right-0 border" type="button" disabled>
                                        <i className="fa fa-envelope-o"></i>
                                    </button>
                                </span>
                                <input className="py-2 border-left-0 border form-control" type="text" placeholder="Your Email address" />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="input-group">
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary border-right-0 border" type="button" disabled>
                                        <i className="fa fa-unlock-alt"></i>
                                    </button>
                                </span>
                                <input className="py-2 border-left-0 border-right-0 border form-control" type="password" placeholder="Create your password" />
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary border-left-0 border" type="button">
                                        <i className="fa fas fa-eye"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="form-row my-2 px-2 py-2">          
                        <div className="col-md-12 mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Mobile</span>
                                </div>
                                <div className="input-group-prepend">
                                    <input type="text" className="input-group-text bg-transparent" placeholder="Area Code" />
                                </div>
                                <input type="text" className="form-control" placeholder="### ####" aria-describedby="inputGroupPrepend" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3 ">
                            <p>By creating a profile you have read and agree to the <a href="#"><span className="text-primary">Online Privacy Statement</span></a>, <a><span className="text-primary">the MobIt SAW Terms & Conditions</span></a> and agree to receive communications electronically according to the E-Sign Disclosure and Consent Notice.</p>
                        </div>
                    </div>
                    <div className="form-row my-2 px-2 py-2">
                        <input type="submit" className="form-control btn btn-primary" value="Complete" onClick={this.Register}/>
                    </div>
                </form>

            </div>
        );
    }
}

register.propTypes = {
    
};

register.contextTypes = {
    router: PropTypes.object
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(register);
