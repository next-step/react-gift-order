import SexItem from '@/components/SexItem';
import { useState } from 'react';
import { SexContainerWrapper } from '@/styles/Sex/SexContainer.styles';

type SexType = 'All' | '남성' | '여성' | '청소년';
const SEX_TYPE = {
  All: 'All',
  남성: '남성',
  여성: '여성',
  청소년: '청소년',
} as const;

function SexContainer() {
  function getInitialSex(): SexType {
    const saved = localStorage.getItem('selectedSex');
    if (saved && Object.values(SEX_TYPE).includes(saved as SexType)) return saved as SexType;
    return SEX_TYPE.All;
  }

  const [selectSex, setSelectsex] = useState<SexType>(getInitialSex);

  function handleSelect(sex: SexType) {
    setSelectsex(sex);
    localStorage.setItem('selectedSex', sex);
  }

  return (
    <SexContainerWrapper>
      <SexItem sex="All" selectSex={selectSex} onClick={() => handleSelect(SEX_TYPE.All)} />
      <SexItem sex="남성" selectSex={selectSex} onClick={() => handleSelect(SEX_TYPE.남성)} />
      <SexItem sex="여성" selectSex={selectSex} onClick={() => handleSelect(SEX_TYPE.여성)} />
      <SexItem sex="청소년" selectSex={selectSex} onClick={() => handleSelect(SEX_TYPE.청소년)} />
    </SexContainerWrapper>
  );
}

export default SexContainer;
