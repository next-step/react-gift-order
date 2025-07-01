import styled from '@emotion/styled'
import { theme } from '@/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.semanticColor.backgroundColor.default};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  padding: ${theme.spacing[6]};
  background-color: ${theme.colors.semanticColor.backgroundColor.default};
`

export const KakaoTitle = styled.div`
  width: 100px;
  height: 100px;
  margin: ${theme.spacing[4]};
`

export const InputForm = styled.input`
  width: 100%;
  height: ${theme.spacing[13]};
  margin-bottom: ${theme.spacing[3]};
  
  ${theme.typography.subtitle1Regular};

  border: none;
  outline: none;
  border-bottom: 1px solid ${theme.colors.colorScale.gray[600]};
 
  transition: 0.2s ease border-color;
  &:focus 
    border-bottom: 1px solid ${theme.colors.colorScale.gray[800]};
 
  &::placeholder 
    color: ${theme.colors.colorScale.gray[600]};
`

export const LoginButton = styled.button`
  width: 100%;
  height: ${theme.spacing[11]};
  margin-top: ${theme.spacing[8]};
  
  background-color: ${theme.colors.semanticColor.brandColor.kakaoYellow};
  color: ${theme.colors.semanticColor.textColor.default};
  ${theme.typography.label2Regular};
  
  border: none;
  border-radius: ${theme.spacing[1]};
  cursor: pointer;

  &:hover
    background-color: ${theme.colors.semanticColor.brandColor.kakaoYellowHover};
`
