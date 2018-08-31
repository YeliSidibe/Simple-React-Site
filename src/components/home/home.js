import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import * as vehicleActions from '../../actions/vehicleActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class Home extends React.Component {  

  constructor(props)
  {
    super(props);    
  }

  componentWillMount()
  {          
    if (!this.props.profile.success) { browserHistory.push('/signin');}
  }

  render() {
    return (
      <main role="main">       
          <div className="d-flex flex-columns justify-content-center">
              <p>Available Swaps</p>
          </div>       
          <div className="fixed-bottom d-flex flex-column justify-content-center">
                <Link to="/addVehicle" className="form-control btn btn-primary btn-lg">
                  <i className="fa fa-lock fa-plus"></i>
                     &nbsp;Add New Vehicle
                </Link>
          </div>          
      </main>
    );
  }
}


Home.propTypes = {
  profile: PropTypes.object,
  actions: PropTypes.object,
};

function mapStateToProps (state,ownProps){  
  let profile = {};  
  if(state.profile.success == true)
  {        
    profile =  Object.assign({},state.profile);     
  }  
  return { 
          profile: profile          
        };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(vehicleActions, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);