import React, { PropTypes } from 'react';
import VehicleListRow from './vehicleListRow';

// const VehicleList = ({vehicles,deleteVehicle}) => {
const vehicleList = ({vehicles}) => {
    return (
        <div className="table-responsive-sm">
            <table className="table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Name</th>
                        <th>Miles_per_Gallon</th>
                        <th>Weight_in_lbs</th>
                        <th>Year</th>
                        <th>Origin</th>
                        <th>Customer</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => <VehicleListRow key={vehicle.Id} vehicle={vehicle}></VehicleListRow>)}
                </tbody>
            </table>
      </div>
    );
};

vehicleList.propTypes = {
    vehicles : PropTypes.array.isRequired
};

export default vehicleList;