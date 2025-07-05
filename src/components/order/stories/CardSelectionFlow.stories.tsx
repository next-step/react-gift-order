import { CardSelectorBar } from "@/components/order/CardSelectorBar";
import { SelectedCardView } from "@/components/order/SelectedCardView";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  decorators: [withOrderProvider],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <>
      <CardSelectorBar />
      <SelectedCardView />
    </>
  ),
};
