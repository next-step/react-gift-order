import { PresentTheme } from "@/components/main";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof PresentTheme> = {
  component: PresentTheme,
};

export default meta;
type Story = StoryObj<typeof PresentTheme>;

export const Default: Story = {
  args: {},
};
