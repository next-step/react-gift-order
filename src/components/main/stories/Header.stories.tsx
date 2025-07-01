import { Header } from "@/components/main";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: Story => {
    return (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
