import { SelectFriendSection } from "@/components/main";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SelectFriendSection> = {
  component: SelectFriendSection,
};

export default meta;
type Story = StoryObj<typeof SelectFriendSection>;

export const Default: Story = {
  args: {},
};
