import React from "react";

function InputField({label,id,type,value,onChange }){
  return (
  <>
          <label htmlFor={id}>{label}</label>

          <input
                  type={type}
                  id={id}
                  value={value}
                  onChange={onChange}
                  className="input"
                /> 
                </>
  );        
}
export default InputField;