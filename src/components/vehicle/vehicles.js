import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as vehicleActions from '../../actions/vehicleActions';
import VehicleList from './vehicleList';
import {browserHistory} from 'react-router';

class vehicles extends Component {
  constructor(props,context)
  {
    super(props,context);
    this.redirectToCreateVehicle = this.redirectToCreateVehicle.bind(this);     
  }
  
  componentWillMount()
  {        
    if (!this.props.profile.success) { browserHistory.push('/signin');}
  }

  redirectToCreateVehicle()
  {
    browserHistory.push('/vehicle');
  }

  render() {
    const {vehicles}  = this.props; // destructure so that we can avoid having to type in this.props everytime
    return (
      <div className="container">             
         <div className="row no-gutters mb-1">
            <input className="btn btn-primary w-100" type="submit" value="Create Vehicle" onClick={this.redirectToCreateVehicle}/>  
          </div>   
          <div className="row">
            <VehicleList vehicles={vehicles}/>            
          </div>
        
      </div>  
    );
  }
}
vehicles.propTypes = {  
  vehicles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  profile : PropTypes.object
};

function mapStateToProps(state,ownProps)
{   
  return {
    vehicles: state.vehicles,
    profile : state.profile    
  };
}

function mapDispatchToProps(dispatch)
{
  return{
    //createVehicle: vehicle => dispatch(vehicleActions.CreateVehicle(vehicle))
    actions: bindActionCreators(vehicleActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(vehicles);
