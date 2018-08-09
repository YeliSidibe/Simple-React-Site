import React from "react";
import TextInput from "../common/textInput";
import SelectInput from "../common/selectInput";

const vehicleForm = ({ vehicle, allCustomers, onSave, onChange, loading, errors }) => {    
    return (        
        <div>
            <form>
                <h1>Manage Vehice</h1>
                <TextInput name="Name" label="Name" value={vehicle.Name} onChange={onChange} error={errors.Name} />
                <SelectInput name="CustomerId" label="Customer" value={vehicle.customerId}
                    defaultOption="Select Customer"
                    options={allCustomers}
                    onChange={onChange} error={errors.CustomerId} />
                <TextInput name="Miles_per_Gallon" label="Miles Per Gallons" value={vehicle.Miles_per_Gallon} onChange={onChange} error={errors.Miles_per_Gallon} />
                <TextInput name="Weight_in_lbs" label="Weight" value={vehicle.Weight_in_lbs} onChange={onChange} error={errors.Weight_in_lbs} />
                <TextInput name="Year" label="Year" value={vehicle.Year} onChange={onChange} error={errors.Year} />
                <TextInput name="Origin" label="Origin" value={vehicle.Origin} onChange={onChange} error={errors.Origin} />
                <input type="Submit" disabled={loading} value={loading ? "Saving ..." : "Save"} className="btn btn-primary" onClick={onSave} onChange={onChange}/>
            </form>
        </div>
    );
};

vehicleForm.propTypes = {
    vehicle: React.PropTypes.object.isRequired,
    allCustomers: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default vehicleForm;
