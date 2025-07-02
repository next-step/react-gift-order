import { Input } from "@/shared/ui/Input";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        width: "250px",
        height: "50px",
        placeholder: "Placeholder",
    },
    render: (args) => <Input {...args} />,
};
