import React, {PropTypes} from 'react';

const TextInputHtmlControl = ({name,onChange,placeholder,value,error,required}) => {    
    if(required)
    {
      return (
        <input type="text" name={name} className="form-control" placeholder={placeholder} value={value} onChange={onChange} required/>
      );
    }
    else
    {
      return (
        <input type="text" name={name} className="form-control" placeholder={placeholder} value={value} onChange={onChange}/>
      );
    }
  
};

TextInputHtmlControl.propTypes = {
    name:PropTypes.string,
    label:PropTypes.string,
    value:PropTypes.string,
    placeholder: PropTypes.string,
    onChange:PropTypes.func,
    error:PropTypes.string,
    required : PropTypes.bool
};

export default TextInputHtmlControl;
