import React from "react";
import Box from "../Box";
import './style.css'

const Checkbox = (props) => {
  const defaultConf = {
    name: props.name,
    value: props.value,
    checked: props.checked,
    ...props,
  };
  
  return (
    <Box className="box-checkbox">  
        <Box id='dsds'  tag='input' type='checkbox' {...defaultConf} />
        <label htmlFor={props.id}>{props.label}</label>
    </Box>
  );
};

export default Checkbox;