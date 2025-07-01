import { Button } from "@/shared/ui/Button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
    component: Button,

    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["primary"],
            },
            defaultValue: "primary",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultArgs: BoxSizing = {
    width: "200px",
    height: "40px",
};

export const Primary: Story = {
    args: {
        ...defaultArgs,
        height: "50px",
    },
    render: (args) => <Button {...args}>Button</Button>,
};

export const RoundedFull: Story = {
    args: {
        ...defaultArgs,
        variant: "primary",
        rounded: "full",
    },
    render: (args) => <Button {...args}>Rounded Full</Button>,
};

export const RoundedTrue: Story = {
    args: {
        ...defaultArgs,
        variant: "primary",
        rounded: true,
    },
    render: (args) => <Button {...args}>Rounded True</Button>,
};

export const RoundedFalse: Story = {
    args: {
        ...defaultArgs,
        rounded: false,
    },
    render: (args) => <Button {...args}>Rounded False</Button>,
};
