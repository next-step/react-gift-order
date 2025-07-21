import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

export const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleRightButtonClick = () => {
    if (isLoggedIn) {
      navigate("/mypage");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-3 mx-auto w-full bg-white shadow-sm border-b border-gray-200">
      <button
        onClick={handleBackClick}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="font-bold text-xl text-gray-800"
        onClick={handleHomeClick}
      >
        선물하기
      </button>

      <button
        onClick={handleRightButtonClick}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        {isLoggedIn ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V7.5a2.25 2.25 0 0 1 2.25-2.25h1.375c.621 0 1.125.504 1.125 1.125V9m7.5-3.75h-3.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5-3.75a1.5 1.5 0 0 0-1.5-1.5H5.125a1.5 1.5 0 0 0-1.5 1.5m1.5 0V21a1.5 1.5 0 0 0 1.5 1.5h13.125a1.5 1.5 0 0 0 1.5-1.5V6.75m-7.5 3.75h7.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
