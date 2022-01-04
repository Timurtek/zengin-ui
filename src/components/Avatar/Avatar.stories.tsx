import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";

export default {
  title: "01.Components/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  variant: "indigo",
  avatarType: "image",
  radius: "default",
};
