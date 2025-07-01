import { Input } from "@/components/common";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "기본입니다.",
  },
};

export const Password: Story = {
  args: {
    placeholder: "비밀번호",
    type: "password",
  },
};

export const Email: Story = {
  args: {
    placeholder: "이메일 혹은 아이디",
  },
};
