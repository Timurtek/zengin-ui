import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { FaBeer } from "react-icons/fa";

export default {
  title: "01.Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} leftIcon={<FaBeer />} rightIcon={<FaBeer />} />
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Click Me", size: "large", variant: "primary" };
