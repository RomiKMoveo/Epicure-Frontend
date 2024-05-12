import React from "react";
import "./Button.scss";

interface ButtonInterface {
  children: React.ReactNode;
  height?: string;
  width?: string;
  icon?: boolean;
  color?: string;
  backGroundColor?: string;
  borderRadius?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
  onClick?: () => void;
}

const Button: React.FC<ButtonInterface> = ({
  children,
  height,
  icon,
  width,
  type,
  color,
  backGroundColor,
  borderRadius,
  disabled=false,
  onClick,
}) => {
  const iconClass = icon ? "icon-btn" : "";
  const disabledBtn = disabled ? "disabled" : "";
  return (
    <button type={type} disabled={disabled} className={`click-btn ${disabledBtn} ${iconClass}`} style={{ borderRadius:borderRadius, color:color, backgroundColor:backGroundColor,width: width, height: height }} onClick={onClick} >
      <div className="icon-container">
      </div>
      {children}
    </button>
  );
};

export default Button;