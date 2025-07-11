import { SelectFriendModal } from "@/components/order/SelectFriendModal";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SelectFriendModal> = {
  component: SelectFriendModal,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof SelectFriendModal>;

export const Default: Story = {
  args: {},
};
