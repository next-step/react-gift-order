import { CardSelectorBar } from "@/components/order/CardSelectorBar";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CardSelectorBar> = {
  component: CardSelectorBar,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof CardSelectorBar>;

export const Default: Story = {
  args: {},
};
