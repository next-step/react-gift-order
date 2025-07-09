import { AuthInput } from "@/features/auth/ui/AuthInput";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AuthInput> = {
    component: AuthInput,
};

export default meta;
type Story = StoryObj<typeof AuthInput>;

export const Default: Story = {
    args: {
        width: "250px",
        height: "50px",
        placeholder: "Placeholder",
    },
    render: (args) => <AuthInput {...args} />,
};
