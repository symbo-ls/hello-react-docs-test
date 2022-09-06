import React from "react";
import Box from "../Box";
import Text from "../Text";
import './style.css'

const Radio = (props) => {
  const defaultConf = {
    name: props.name,
    value: props.value,
    checked: props.checked,
    ...props,
  };
  


  return (
    <Box className="box-radio">  
        <Box id='dsds'  tag='input' type='radio' {...defaultConf} />
        <label htmlFor={props.id}>{props.label}</label>
    </Box>
  );
};

export default Radio;