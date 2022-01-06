import classNames from "classnames";
import React from "react";

export interface AvatarProps {
  /**
   * Avatar Background color?
   */
  variant?: "indigo" | "gray" | "yellow" | "blue" | "green" | "red";
  /**
   * Is this the principal call to action on the page?
   */
  avatarType?: "image" | "title";
  /**
   * How large should the avatar be?
   */
  size?: "small" | "medium" | "large";
  /**
   * The radius of the avatar?
   */
  radius?: "none" | "default" | "circle";
  /**
   * Avatar Title
   */
  title?: string;
  /**
   * Avatar is in loading mode
   */
  loading?: boolean;

  /**
   * Avatar custom class names
   */
  className?: string;
}

const Avatar = ({
  variant = "indigo",
  avatarType = "image",
  size = "medium",
  radius = "default",
  loading = false,
  className,
  title,
  ...otherProps
}: AvatarProps) => {
  const avatarClassNames = classNames(
    "overflow-hidden",
    {
      "w-6 h-6": size === "small",
      "w-8 h-8": size === "medium",
      "w-12 h-12": size === "large",
      "rounded-none": radius === "none",
      rounded: radius === "default",
      "rounded-full": radius === "circle",
      "inline-flex items-center text-center font-serif": avatarType === "title",
      "text-xs font-medium": size === "small",
      "text-sm font-bold": size === "medium",
      "text-lg font-bold": size === "large",
      [`bg-${variant}-600 dark:bg-${variant}-50 text-white dark:text-gray-700`]:
        variant,
    },
    className
  );
  const titleInitals = () => {
    let output = title ? title.trim().split(" ") : "Z";
    return `${output[0][0].trim().toUpperCase()}${
      output.length > 1 ? output[output.length - 1][0].toUpperCase() : ""
    }`;
  };
  return (
    <div {...otherProps} className={avatarClassNames} tabIndex={0}>
      {avatarType === "image" && (
        <img
          src="https://pbs.twimg.com/profile_images/1407806352760602624/JMOyaoqE_normal.jpg"
          title={title}
          alt={title}
        />
      )}
      {avatarType === "title" && <div className="w-full">{titleInitals()}</div>}
    </div>
  );
};

export default Avatar;
