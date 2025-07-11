import { ReceiverInfoForm } from "@/components/order/ReceiverInfoForm";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ReceiverInfoForm> = {
  component: ReceiverInfoForm,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof ReceiverInfoForm>;

export const Default: Story = {
  args: {},
};
