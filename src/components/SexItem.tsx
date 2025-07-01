import { SexContainerWrapperItem } from '@/styles/Sex/SexItemStyle.styles';

type SexProps = {
  sex: string;
  selectSex: string;
  onClick: () => void;
};

function SexItem({ sex, selectSex, onClick }: SexProps) {
  const selected = sex === selectSex;
  return (
    <SexContainerWrapperItem selected={selected} onClick={onClick}>
      {sex}
    </SexContainerWrapperItem>
  );
}

export default SexItem;
