import React, { Component,PropTypes } from 'react';
import VehicleListRow from './vehicleListRow';
import Paginator from '../pagination/pagination';

class vehicleList extends Component
{
    constructor(props)
    {
      super(props);        
      this.onPageChange = this.onPageChange.bind(this);         
    }

    onPageChange(pagenumber)
    {        
        console.log('Parent functions called...');
    }

    render(){        
        const renderedItems = this.props.vehicles;        
        return (
            <div className="container">           
               <div className="row">                
                       {renderedItems.map(vehicle => <VehicleListRow key={vehicle.Id} vehicle={vehicle}/>)}                  
               </div>
               <div className="d-flex justify-content-center mt-2">
                    {renderedItems.length > 0 && <Paginator onPageChange={this.onPageChange}/>}
               </div>                       
            </div>        
       );
    }    
}

vehicleList.propTypes = {
    vehicles : PropTypes.array.isRequired
};

export default vehicleList;