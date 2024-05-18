import React from "react";
import "./Button.scss";

// const Button: React.FC<ButtonInterface> = ({
//   icon,
//   title,
//   customStyle,
//   disabled = false,
//   onClick,
// }) => {
//   const iconClass = icon ? "icon-btn" : "";
//   const disabledBtn = disabled ? "disabled" : "";
//   return (
//     <button
//       // type={type}
//       disabled={disabled}
//       className={`click-btn ${disabledBtn} ${iconClass}`}
//       onClick={onClick}
//     >
//       <div className="icon-container" style={{ ...customStyle }}>
//         {icon && <img src={icon} alt="icon" className="icon" />}
// export interface ButtonInterface {
//   title: string;
//   icon?: string;
//   color?: string;
//   backGroundColor?: string;
//   customStyle?: CSSProperties;
//   disabled?: boolean;
//   onClick?: () => void;
// }

interface ButtonInterface {
  children: React.ReactNode;
  text?: string;
  height?: string;
  width?: string;
  icon?: string;
  color?: string;
  backGroundColor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
  onClick?: () => void;
}

const Button: React.FC<ButtonInterface> = ({
  children,
  text,
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
        {children}
     </button>
    </div>
      
  );
};

export default Button;