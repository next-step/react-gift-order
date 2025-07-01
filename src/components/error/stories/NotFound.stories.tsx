import { NotFound } from "@/components/error/NotFound";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof NotFound> = {
  component: NotFound,
  decorators: Story => {
    return (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    );
  },
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  args: {},
};
