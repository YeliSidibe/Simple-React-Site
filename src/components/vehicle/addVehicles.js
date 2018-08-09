import React, { Component } from 'react';

export default class addVehicles extends Component {

    constructor(props,context)
    {
      super(props,context);
      this.state = {vehicle: { description:"",color:"",make:"",year:0,owner:"" } };
      this.onDescriptionChange = this.onDescriptionChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
    }
    onDescriptionChange(event)
    {
      const _vehicle = this.state.vehicle;
      _vehicle.description = event.target.value;
      this.setState({vehicle:_vehicle});
    }

    onClickSave()
    {        
        this.props.actions.CreateVehicle(this.state.vehicle);
    }

  render() {
    return (
      <div>
        <h2>Add Vehicle</h2>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">description</label>
            <div className="col-sm-5">
                {/* <input type="text" className="form-control" onChange={this.onDescriptionChange} value={this.state.vehicle.description}/> */}
            </div>
            <div className="col-sm-5">
                {/* <input type="submit" className="btn btn-primary" onClick={this.onClickSave} value="Save" value="Save"/> */}
              </div>            
          </div>  
      </div>
    )
  }
}
