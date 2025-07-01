import type { mockItemType } from '@/mocks/mockItem';
import Item from '@/components/Item';

import ItemBtn from '@/components/ItemBtn';
import { useState } from 'react';

import { ItemContainerStyle, ItemlistContainer } from '@/styles/Item/ItemlistContainer.styles';

function ItemContainer({ itemList }: { itemList: mockItemType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const item: mockItemType[] = Array.from({ length: 20 }, () => ({
    id: itemList.id,
    name: itemList.name,
    imageURL: itemList.imageURL,
    price: {
      basicPrice: itemList.price.basicPrice,
      discountRate: itemList.price.discountRate,
      sellingPrice: itemList.price.sellingPrice,
    },
    brandInfo: {
      id: itemList.brandInfo.id,
      name: itemList.brandInfo.name,
      imageURL: itemList.brandInfo.imageURL,
    },
  }));

  const visibleItems = isExpanded ? item : item.slice(0, 6);
  function handleToggle() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <ItemlistContainer>
      <ItemContainerStyle>
        {visibleItems.map((itemData, index) => (
          <Item key={itemData.id} index={index} itemData={itemData} />
        ))}
      </ItemContainerStyle>
      <ItemBtn isExpanded={isExpanded} onClick={handleToggle} />
    </ItemlistContainer>
  );
}

export default ItemContainer;
