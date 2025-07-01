import { HotGiftRankingTag } from "@/components/main";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof HotGiftRankingTag> = {
  component: HotGiftRankingTag,
};

export default meta;
type Story = StoryObj<typeof HotGiftRankingTag>;

export const Default: Story = {
  args: {
    tagEmoji: "아이콘",
    tagText: "텍스트",
  },
};
export const DefaultSeleted: Story = {
  args: {
    tagEmoji: "ALL",
    isSelected: true,
    tagText: "전체",
  },
};
export const All: Story = {
  args: {
    tagEmoji: "ALL",
    isSelected: false,
    tagText: "전체",
  },
};

export const AllSelected: Story = {
  args: {
    tagEmoji: "All",
    isSelected: true,
    tagText: "전체",
  },
};
