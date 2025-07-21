interface NumberBoxProps {
  ranking: number;
  isVisible: boolean;
}

const NumberBox = ({ ranking, isVisible }: NumberBoxProps) => {
  if (!isVisible) {
    return null;
  }

  const backgroundColorType =
    ranking === 1 || ranking === 2 || ranking === 3
      ? "bg-red-500"
      : "bg-gray-300";

  return (
    <div className="w-5 h-5 rounded-sm flex items-center justify-center">
      <div className={`w-full h-full rounded-sm ${backgroundColorType}`}>
        <p className="text-white text-sm text-center pt-0.5">{ranking}</p>{" "}
      </div>
    </div>
  );
};

export default NumberBox;
