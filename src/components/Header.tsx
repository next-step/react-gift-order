import { useNavigate } from "react-router-dom";
import { PATHS } from "../constants/paths";

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(PATHS.LOGIN);
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-20">
      <div className="flex items-center">
        <button
          onClick={handleBackClick}
          className="text-gray-600 mr-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-800">선물하기</h1>
      </div>
      <button
        onClick={handleProfileClick}
        className="text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
