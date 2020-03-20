import React from "react";
import "./button.css";

const Button = ({props,type,onButtonClick}) => {
return <div className={ `Button ${props === '0' ? 'zero' : ""} ${type || ""}`}
onClick={onButtonClick(props)}
> {props}</div>;
};
export default Button;