import { HotGiftRanking } from "@/components/main";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof HotGiftRanking> = {
  component: HotGiftRanking,
  decorators: Story => {
    return (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    );
  },
};

export default meta;
type Story = StoryObj<typeof HotGiftRanking>;

export const Default: Story = {
  args: {},
};
