import { OrderButton } from "@/components/order/OrderButton";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { withOrderProvider } from "./decorators";

const meta: Meta<typeof OrderButton> = {
  component: OrderButton,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof OrderButton>;

export const Default: Story = {
  args: {},
};
