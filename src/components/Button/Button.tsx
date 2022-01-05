import classNames from "classnames";
import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "primary" | "default" | "link";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button label
   */
  label?: string;
  /**
   * Left Icon
   */
  leftIcon?: React.ReactNode;
  /**
   * Right Icon
   */
  rightIcon?: React.ReactNode;
  /**
   * Button disabled or not
   */
  disabled?: boolean;
  /**
   * Button disabled or not
   */
  loading?: boolean;
  /**
   * Button disabled or not
   */
  className?: string;
}

const Button = ({
  label,
  variant = "primary",
  size = "medium",
  disabled = false,
  leftIcon,
  rightIcon,
  loading = false,
  className,
  ...otherProps
}: ButtonProps) => {
  const buttonClassNames = classNames(
    "font-serif inline-flex items-center justify-center border border-transparent text-white focus:ring-offset-2 focus:ring-2 rounded-full ease-in duration-300",
    {
      "bg-gray-600 hover:bg-gray-700 focus:bg-gray-800":
        variant === "default" && !disabled,
      "bg-transparent hover:bg-indigo-50 focus:bg-indigo-100 text-indigo-600":
        variant === "link" && !disabled,
      "bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800":
        variant === "primary" && !disabled,
      "px-4 py-2 text-sm font-medium": size === "small",
      "px-6 py-3 text-base font-medium": size === "medium",
      "px-8 py-4 text-lg font-medium": size === "large",
      "bg-gray-300 hover:bg-gray-300 text-gray-400 cursor-not-allowed":
        disabled,
    },
    className
  );
  return (
    <button
      {...otherProps}
      type="button"
      disabled={disabled}
      className={buttonClassNames}
      tabIndex={0}
    >
      {!loading && leftIcon && (
        <span
          className={classNames({
            "mr-2": size === "small",
            "mr-3": size === "medium",
            "mr-4": size === "large",
          })}
        >
          {leftIcon}
        </span>
      )}
      {!loading && label && label}
      {!loading && rightIcon && (
        <span
          className={classNames({
            "ml-2": size === "small",
            "ml-3": size === "medium",
            "ml-4": size === "large",
          })}
        >
          {rightIcon}
        </span>
      )}
      {loading && (
        <CgSpinnerTwoAlt
          className={classNames("animate-spin", {
            "text-xl": size === "small",
            "text-2xl": size === "medium",
            "text-3xl": size === "large",
          })}
        />
      )}
    </button>
  );
};

export default Button;
