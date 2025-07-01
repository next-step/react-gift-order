import theme from '@/styles/theme'
import styled from '@emotion/styled'
import React from 'react'

const MySection = styled.section`
    width: 100%;
    padding: 16px 12px;
    background-color: rgb(243, 244, 245);
`

const MyButtom = styled.button`
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 16px;
    border-radius: 18px;
    cursor: pointer;
`

const MyDiv =  styled.div`
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 16px;
    background-color: ${theme.colors.yellow600};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`

const FriendChoise = () => {
  return (
    <MySection>
      <MyButtom>
        <MyDiv>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a3038"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </MyDiv>
        <p>선물할 친구를 선택해 주세요.</p>
      </MyButtom>
    </MySection>
  )
}

export default FriendChoise