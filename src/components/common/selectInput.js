import React, {PropTypes} from 'react';

const SelectInput = ({name,label,value,defaultOption,options,onChange,error}) => {
    let wrapperClass= "form-group";    
    if(error.length > 0)
    {
        wrapperClass += " " + "has-error";
    }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
            <select type="text" name={name} className="form-control" value={value} onChange={onChange}>
            {options.map((option) => { 
                return <option key={option.value} value={option.value}>{option.text}</option>;
            })}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    defaultOption: PropTypes.string,
    onChange:PropTypes.func.isRequired,    
    options: PropTypes.arrayOf(PropTypes.object),
    error:PropTypes.string
};

export default SelectInput;
