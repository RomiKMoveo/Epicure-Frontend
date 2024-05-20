export interface ButtonInterface {
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