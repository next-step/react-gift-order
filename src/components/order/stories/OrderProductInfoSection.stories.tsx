import { product } from "@/__mock__";
import { OrderProductInfoSection } from "@/components/order/OrderProductInfoSection";
import { withOrderProvider } from "@/components/order/stories/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof OrderProductInfoSection> = {
  component: OrderProductInfoSection,
  decorators: [withOrderProvider],
};

export default meta;
type Story = StoryObj<typeof OrderProductInfoSection>;

const mockProduct = product;

export const Default: Story = {
  args: {
    product: {
      id: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      brandInfo: mockProduct.brandInfo,
      imageURL: mockProduct.imageURL,
    },
  },
};
