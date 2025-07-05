import { SenderInfoSection } from "@/components/order/SenderInfoSection";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SenderInfoSection> = {
  component: SenderInfoSection,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof SenderInfoSection>;

export const Default: Story = {
  args: {},
};
