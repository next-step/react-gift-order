import styled from '@emotion/styled'

import { Navbar } from './Navbar'
import type { ReactNode } from 'react'

const Wrapper = styled.div`
   max-width: 600px;  
  margin: 0 auto;     
  width: 100;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  flex: 1;
`;


interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (

    <Wrapper>
      
      <Inner>
        <Navbar/>
        {children}  {/* ✅ LoginPage나 홈 콘텐츠 */}
      </Inner>
    </Wrapper>
  )
}
export default Layout;

