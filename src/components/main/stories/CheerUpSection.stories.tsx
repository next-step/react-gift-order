import { CheerUpSection } from "@/components/main";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CheerUpSection> = {
  component: CheerUpSection,
};

export default meta;
type Story = StoryObj<typeof CheerUpSection>;

export const Default: Story = {
  args: {},
};
