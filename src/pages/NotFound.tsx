import { Link } from 'react-router-dom';


export default function NotFound() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>죄송합니다. 요청하신 페이지를 찾을 수 없어요.</p>
            <Link to="/">홈으로 돌아가기</Link>
        </div>
    );
}
