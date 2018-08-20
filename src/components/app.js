import React, { Component,PropTypes } from 'react'; 
import Header from './common/header';
import {connect} from 'react-redux';
import LoadingComponent from './common/loadingDots';

 class App extends Component {  
   
  render() {    
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row no-gutters mb-1 d-flex justify-content-center">
            {this.props.loading && <LoadingComponent interval={100} dots={20} />}
          </div>
        </div>
        <Header loading={this.props.loading} showIdentityMenu={this.props.showIdentityMenu} />
        {this.props.children}
        {/* <div className="navbar nav-scroller bg-dark fixed-bottom">
          <nav className="nav nav-underline">
            <a className="nav-link active" href="#">Dashboard</a>
            <a className="nav-link" href="#">
              Friends
          <span className="badge badge-pill bg-light align-text-bottom">27</span>
            </a>
            <a className="nav-link" href="#">Explore</a>
            <a className="nav-link" href="#">Suggestions</a>          
          </nav>
        </div>  */}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  showIdentityMenu: PropTypes.bool.isRequired
};

function mapStateToProps(state,ownProps)
{      
  return {
    loading: state.ajaxCallsInProgress > 0,
    showIdentityMenu : state.showIdentityMenu
  };
}

export default connect(mapStateToProps)(App);
