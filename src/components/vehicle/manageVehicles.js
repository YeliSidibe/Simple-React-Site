import React, { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as VehicleActions from '../../actions/vehicleActions';
import ManageVehicle from './vehicleForm';

class manageVehicles extends Component {
    constructor(props, context) {
        super(props, context);        
        this.state = {
            vehicle: Object.assign({}, this.props.vehicle),
            errors: { Name: '',CustomerId : '',Miles_per_Gallon:'',Weight_in_lbs:'',Year:'',Origin:''}
        };
        this.updateVehicleState = this.updateVehicleState.bind(this);
        this.saveVehicle = this.saveVehicle.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        // when the state changes update the state. Necessary to update the vehicle when existing vehicle is loaded directly
        if(this.state.vehicle.Id != nextProps.vehicle.Id){ this.setState({vehicle:Object.assign({},nextProps.vehicle)});}
    }
    updateVehicleState(event)
    {        
        const field = event.target.name;               
        let vehicle = Object.assign({},this.state.vehicle);
        vehicle[field] = event.target.value;
        return this.setState({vehicle:vehicle});
    }
    redirectToVehicle()
    {
        this.context.router.push('/vehicles');
    }
    saveVehicle(event)
    {
        event.preventDefault();        
        this.props.actions.SaveVehicle(this.state.vehicle).then(() => this.redirectToVehicle());        
    }
    render() {        
        return (
            <ManageVehicle vehicle={this.state.vehicle} 
                            allCustomers={this.props.customers}  
                            onSave={this.saveVehicle}
                            onChange={this.updateVehicleState}
                            loading = {false}
                            errors={this.state.errors} 
            />
        );
    }
}


manageVehicles.propTypes = {
    vehicle: PropTypes.object.isRequired,
    customers : PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
manageVehicles.contextTypes = {
    router: PropTypes.object
};

function getVehicleById(vehicles, id)
{
    const vehicle =  vehicles.filter(vehicle => vehicle.Id === id);
    if(vehicle.length) return vehicle[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    let vehicle = {
        Id: "", Name: "", Miles_per_Gallon: 0, Cylinders: 0, Displacement: 0, Horsepower: 0, Weight_in_lbs: 0, Acceleration: 0, Year: 0, Origin: "", CustomerId: "", watchHref: "http://www.pluralsight.com/courses/1"
    };
    const vehicleId  = ownProps.params.Id;     
    if(vehicleId && state.vehicles.length > 0)
    {
        vehicle = getVehicleById(state.vehicles,vehicleId);
    }    
    const customerSelectListItemViewModel = state.customers.map((customer) => { return {value:customer.id,text:customer.firstName + " " + customer.lastName};});
    return {
        //state:state
        vehicle: vehicle,
        customers :customerSelectListItemViewModel
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(VehicleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(manageVehicles);