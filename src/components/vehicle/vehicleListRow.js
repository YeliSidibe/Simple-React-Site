import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const vehicleListRow = ({vehicle}) => {
    return (
        <div className="col-sm-4">    
            <div className="card text-center">
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">            
                <p className="text-muted"><Link to={'/vehicle/' + vehicle.Id} className="btn btn-primary">{vehicle.Name}</Link></p>
                    {/* <h5 className="card-title"><a href={vehicle.watchHref} target="_blank">Watch</a></h5> */}
                    <p className="card-text">Miles_per_Gallon: {vehicle.Miles_per_Gallon}</p>
                    <p className="card-text">Weight_in_lbs: {vehicle.Weight_in_lbs}</p>
                    <p className="card-text">Year: {vehicle.Year}</p>
                    <p className="card-text">{vehicle.CustomerId}</p>                
                    <div className="card-footer">
                        <small className="text-muted">{vehicle.Origin}</small>
                    </div>              
                </div>
            </div>  
        </div>    
    );
};

vehicleListRow.propTypes = {
    vehicle:PropTypes.object.isRequired
};

export default vehicleListRow;
