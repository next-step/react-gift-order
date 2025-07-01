import theme from '@/styles/theme'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'


const MYDiv = styled.div`
    max-width: 720px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: rgb(255, 255, 255);
    padding-top: 2.75rem;
`
const NotFoundmain = styled.main`
    width: 100%;
    height: calc(-2.75rem + 100vh);
    background-color: rgb(243, 244, 245);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 5rem 1.25rem;    
`

const NotFoundImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;    
`

const Myh3 = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6875rem;
    color: ${theme.colors.text_default};
    margin: 0px;
    text-align: left;
    padding-top: 28px;

`

const MyP = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
    color: ${theme.colors.text_sub};
    margin: 0px;
    text-align: left;
    padding: 8px 0px 48px 0px;
`

const HomeButton = styled.button`
    width: 160px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.kakaoYellow};
    color: ${theme.colors.text_default};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
    cursor: pointer;
`



const Notfound = () => {

    const navigate = useNavigate();
  return (
    <MYDiv>
      <NotFoundmain>
        <NotFoundImg
          alt="not found"
          src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"
        />
        <Myh3>잘못된 접근입니다.</Myh3>
        <MyP>찾으시는 페이지가 존재하지 않습니다.</MyP>
        <HomeButton onClick={()=> navigate('/')}>홈으로</HomeButton>
      </NotFoundmain>
    </MYDiv>
  )
}

export default Notfound
