import type { mockItemType } from '@/mocks/mockItem';
import Item from '@/components/Item';

import ItemBtn from '@/components/ItemBtn';
import { useState } from 'react';

import { ItemContainerStyle, ItemlistContainer } from '@/styles/Item/ItemlistContainer.styles';

function ItemContainer({ itemList }: { itemList: mockItemType[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? itemList : itemList.slice(0, 6);
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
