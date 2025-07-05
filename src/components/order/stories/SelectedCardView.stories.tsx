import { SelectedCardView } from "@/components/order/SelectedCardView";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SelectedCardView> = {
  component: SelectedCardView,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof SelectedCardView>;

export const Default: Story = {
  args: {},
};
