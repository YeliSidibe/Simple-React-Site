import {Link} from 'react-router';
import React, { PropTypes } from 'react';

const Oprions = () => {  
  return (
    <div>
      <div className="fixed-bottom d-flex justify-content-center" id="home-buttons-section">                
                <Link to="/swap" className="form-control btn btn-primary btn-lg w-75">
                  <i className="fa fa-lock fa-fw"></i>
                    Add New Swap
                </Link>
          </div>  
        <div className="navbar nav-scroller bg-dark fixed-bottom justify-content-center" id="home-bottom">
          <nav className="nav nav-underline">            
            <a className="nav-link text-white d-flex flex-rows" href="#">
                <div className="d-flex flex-column">
                  <i className="fa fa-money"></i>
                  <span>Quick Swap</span>
                </div>
                <hr className="vertical-line"/>
            </a>
            <a className="nav-link text-white d-flex flex-rows px-0" href="#">
                <div className="d-flex flex-column">
                  <i className="fa fa-search"></i>
                  <span>Search</span>
                </div>              
                <hr className="vertical-line"/>
            </a>
            <a className="nav-link text-white d-flex flex-rows" href="#">  
            <div className="d-flex flex-column">          
                <i className="fa fa-compass"></i>
                <span>Track Swap</span>
            </div>
            </a>
          </nav>
        </div>
    </div>
  );
};

Oprions.propTypes = {
  
};

export default Oprions;
