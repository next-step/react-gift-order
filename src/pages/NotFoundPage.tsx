import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">404 - 페이지를 찾을 수 없습니다.</h2>
      <p className="mb-4">요청하신 페이지를 찾을 수 없습니다.</p>
      {/* 홈으로 돌아가는 링크 */}
      <Link to="/" className="text-blue-600 hover:underline">
        홈으로 이동
      </Link>
    </div>
  );
};

export default NotFoundPage;
