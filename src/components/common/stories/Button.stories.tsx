import { Button } from "@/components/common/Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Primary",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Primary",
  },
};

export const PrimaryFullWidth: Story = {
  args: {
    variant: "primary",
    size: "large",
    width: "100%",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Secondary",
  },
};

export const SecondaryFullWidth: Story = {
  args: {
    variant: "secondary",
    size: "large",
    width: "100%",
    children: "Secondary",
  },
};
