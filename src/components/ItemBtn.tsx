import { ExpandBtn } from '@/styles/Item/ItemBtn.styles';

type ItemBtnProps = {
  isExpanded: boolean;
  onClick: () => void;
};

function ItemBtn({ isExpanded, onClick }: ItemBtnProps) {
  return <ExpandBtn onClick={onClick}>{isExpanded ? '접기' : '더보기'}</ExpandBtn>;
}

export default ItemBtn;
