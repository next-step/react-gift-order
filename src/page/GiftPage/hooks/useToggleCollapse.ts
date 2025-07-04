import { useState } from 'react';

const NUM = 6;

const useToggleCollapse = (dataLength: number) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [visibleItemsCount, setVisibleItemsCount] = useState(NUM);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
    setVisibleItemsCount(isCollapsed ? dataLength : NUM);
  };

  return { isCollapsed, visibleItemsCount, toggleCollapse };
};

export default useToggleCollapse;
