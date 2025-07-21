interface ThanksCardProps {
  id: number;
  thumbUrl: string;
  defaultMessage: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const ThanksCard = ({
  id,
  thumbUrl,
  isSelected,
  onSelect,
}: ThanksCardProps) => {
  return (
    <div
      className={`relative
        w-24 h-16
        flex-none cursor-pointer transform overflow-hidden rounded-lg shadow-md transition-transform duration-200 ${
          isSelected
            ? "scale-105 border-4 border-yellow-400"
            : "border border-gray-200"
        }`}
      onClick={() => onSelect(id)}
    >
      <img src={thumbUrl} alt="썸네일" className="h-full w-full object-cover" />
    </div>
  );
};

export default ThanksCard;
