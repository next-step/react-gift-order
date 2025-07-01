import { HotGiftRankingTab } from "@/components/main";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof HotGiftRankingTab> = {
  component: HotGiftRankingTab,
};

export default meta;
type Story = StoryObj<typeof HotGiftRankingTab>;

export const Default: Story = {
  args: {},
};

export const ManyWish: Story = {
  args: {
    selectedTab: "MANY_WISH",
    onTabChange: () => {},
  },
};

export const ManyReceive: Story = {
  args: {
    selectedTab: "MANY_RECEIVE",
    onTabChange: () => {},
  },
};

export const ManyWishReceive: Story = {
  args: {
    selectedTab: "MANY_WISH_RECEIVE",
    onTabChange: () => {},
  },
};
