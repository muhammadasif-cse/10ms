import React from "react";
import { IPrimaryButtonProps } from "./type";

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      className={`bg-primary text-white whitespace-nowrap text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium flex items-center px-3 py-1.5 rounded-md bg-green md:px-6 hover:bg-primary/80 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
