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
        <Header loading={this.props.loading} profile={this.props.profile} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  profile: PropTypes.object
};

function mapStateToProps(state,ownProps)
{        
  return {
    loading: state.ajaxCallsInProgress > 0,
    profile: state.profile
  };
}

export default connect(mapStateToProps)(App);
