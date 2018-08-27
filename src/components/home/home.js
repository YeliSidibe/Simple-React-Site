import React from 'react';
import {Link} from 'react-router';
export default class Home extends React.Component {
  render() {
    return (
      <main role="main"> 
          <div className="d-flex flex-columns justify-content-center">
              <p>welcome, ultra responsive swap app</p>                
          </div>       
          <div className="fixed-bottom d-flex justify-content-center" id="home-buttons-section">
                <Link to="signin" className="form-control btn btn-primary btn-lg w-75">
                  <i className="fa fa-lock fa-fw"></i>
                    Log in / Sign up
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
      </main>
    );
  }
}
