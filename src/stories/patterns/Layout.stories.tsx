import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { NavigationPattern } from "./Navigation.stories";

export default {
  title: "02.Patterns/Layout",
} as Meta;

const Template: Story = (args) => (
  <div id="main-layout" className="grid">
    <NavigationPattern className="sticky top-0" />
    <div className="flex h-screen">
      <h1>Layout</h1>
    </div>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Click Me", size: "large", variant: "primary" };
