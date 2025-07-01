import { LoginLogo } from "@/components/login/LoginLogo";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof LoginLogo> = {
  component: LoginLogo,
};

export default meta;
type Story = StoryObj<typeof LoginLogo>;

export const Default: Story = {
  args: {},
};
