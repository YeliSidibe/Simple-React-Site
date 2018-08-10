import React, {PropTypes} from 'react';
import TextInputHtmlControl from '../common/textInputHtmlControl';

const TextInput = ({name,label,onChange,placeholder,value,error}) => {    
    let wrapperClass= "form-group";    
    if(error.length > 0)
    {
        wrapperClass += " " + "has-error";
    }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">            
            <TextInputHtmlControl name={name} placeholder={placeholder} value={value} onChange={onChange} required={false}/>
            {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    placeholder: PropTypes.string,
    onChange:PropTypes.func.isRequired,
    error:PropTypes.string
};

export default TextInput;
