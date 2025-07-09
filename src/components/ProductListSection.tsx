import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { productListMock } from '@/data/productListMock';
import { ProductItem } from '@/components/ProductItem';
import { Tab } from '@/components/common/Tab';
import { Button } from '@/components/common/Button';

export function ProductListSection() {
  /* 탭/더보기 상태 */
  const [mainTab, setMainTab] = useState<'ALL' | 'F' | 'M' | 'T'>('ALL');
  const [subTab, setSubTab] = useState<'WANT' | 'GIVE' | 'WISH'>('WANT');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const savedMainTab = localStorage.getItem('mainTab');
    const savedSubTab = localStorage.getItem('subTab');

    if (savedMainTab && ['ALL', 'F', 'M', 'T'].includes(savedMainTab)) {
      setMainTab(savedMainTab as 'ALL' | 'F' | 'M' | 'T');
    }
    if (savedSubTab && ['WANT', 'GIVE', 'WISH'].includes(savedSubTab)) {
      setSubTab(savedSubTab as 'WANT' | 'GIVE' | 'WISH');
    }
  }, []);

  const handleMainTabClick = (tab: 'ALL' | 'F' | 'M' | 'T') => {
    setMainTab(tab);
    localStorage.setItem('mainTab', tab);
  };

  const handleSubTabClick = (tab: 'WANT' | 'GIVE' | 'WISH') => {
    setSubTab(tab);
    localStorage.setItem('subTab', tab);
  };

  const products = showAll ? productListMock : productListMock.slice(0, 6);

  /* 렌더링 */
  return (
    <Section>
      {/* 타이틀 */}
      <Title>실시간 급상승 선물랭킹</Title>

      {/* 1차 탭 : 대상별 */}
      <MainTabs>
        <Tab variant="main" active={mainTab === 'ALL'} onClick={() => handleMainTabClick('ALL')}>
          🎁 전체
        </Tab>
        <Tab variant="main" active={mainTab === 'F'} onClick={() => handleMainTabClick('F')}>
          👩 여성이
        </Tab>
        <Tab variant="main" active={mainTab === 'M'} onClick={() => handleMainTabClick('M')}>
          👨 남성이
        </Tab>
        <Tab variant="main" active={mainTab === 'T'} onClick={() => handleMainTabClick('T')}>
          🧒 청소년이
        </Tab>
      </MainTabs>

      {/* 2차 탭 : 액션별 */}
      <SubTabs>
        <Tab variant="sub" active={subTab === 'WANT'} onClick={() => handleSubTabClick('WANT')}>
          받고 싶어한
        </Tab>
        <Tab variant="sub" active={subTab === 'GIVE'} onClick={() => handleSubTabClick('GIVE')}>
          많이 선물한
        </Tab>
        <Tab variant="sub" active={subTab === 'WISH'} onClick={() => handleSubTabClick('WISH')}>
          위시로 받은
        </Tab>
      </SubTabs>

      {/* 상품 그리드 */}
      <ProductGrid>
        {products.map((p, idx) => (
          <ProductItem key={p.id} product={p} rank={idx + 1} />
        ))}
      </ProductGrid>

      {/* 더보기 / 접기 */}
      <Button variant="secondary" onClick={() => setShowAll(!showAll)}>
        {showAll ? '접기' : '더보기'}
      </Button>
    </Section>
  );
}

/* ───────── styles ───────── */

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title.title2Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const MainTabs = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  overflow-x: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const SubTabs = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.blue.blue100};
  padding: ${({ theme }) => theme.spacing.spacing3} 0;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
`;

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing4};
`;
