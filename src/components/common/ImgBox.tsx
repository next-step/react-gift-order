interface ImgBoxProps {
  category: string;
  img: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const ImgBox = ({ category, img, isActive, onClick }: ImgBoxProps) => {
  const activeBgClass = isActive ? "bg-blue-500" : "bg-gray-100";
  const activeTextClass = isActive ? "text-blue-500" : "text-gray-700";

  const isImageUrl = img.startsWith("/") || img.startsWith("http");

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`
          rounded-full w-20 h-20 flex items-center justify-center overflow-hidden
          ${activeBgClass}
          transition duration-200 ease-in-out
        `}
      >
        {isImageUrl ? (
          <img src={img} alt={category} className="w-12 h-12 object-contain" />
        ) : (
          <span
            className={`text-xl font-bold ${
              isActive ? "text-white" : "text-gray-700"
            }`}
          >
            {img}
          </span>
        )}
      </div>
      <p className={`mt-2 text-sm font-medium ${activeTextClass}`}>
        {category}
      </p>
    </div>
  );
};
