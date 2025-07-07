import { useAuth } from '@/contexts/AuthContext'
import { ROUTE_PATH } from '@/routes/Router'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const My = () => {
  const {user}= useAuth()
  const navigate= useNavigate()
const handleClickLogoutBtn =()=>{
  localStorage.removeItem("user")
  navigate(ROUTE_PATH.HOME)

}
  return (
    <div>
      <h1>마이페이지</h1>
      <p>{user.username}님 안녕하세요!</p>

      <button onClick={handleClickLogoutBtn}>로그아웃</button>
    </div>
  );
}

export default My
