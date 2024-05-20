import React from "react";
import "./Button.scss";
import { ButtonInterface } from "./Button.type";

const Button: React.FC<ButtonInterface> = ({
  height,
  icon,
  width,
  type,
  color,
  backGroundColor,
  disabled=false,
  onClick,
}) => {
  const iconClass = icon ? "icon-btn" : "";
  const disabledBtn = disabled ? "disabled" : "";
  return (
    <div className="button-container">
      <button type={type} disabled={disabled} className={`click-btn ${disabledBtn} ${iconClass}`} style={{ color:color, backgroundColor:backGroundColor,width: width, height: height }} onClick={onClick} >
        <div className="icon-container">
        <img src={icon} alt="googlePay" />
        </div>
     </button>
    </div>
      
  );
};

export default Button;