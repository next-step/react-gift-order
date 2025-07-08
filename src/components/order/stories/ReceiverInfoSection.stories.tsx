import { ReceiverInfoSection } from "@/components/order/ReceiverInfoSection";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ReceiverInfoSection> = {
  component: ReceiverInfoSection,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof ReceiverInfoSection>;

export const Default: Story = {
  args: {},
};
