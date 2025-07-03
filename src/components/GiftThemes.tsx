import { giftThemesData } from "../data/giftThemesData";
import type { ThemeItem } from "../types/common";

const GiftThemes = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">선물 테마</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-4 gap-x-2 text-center bg-white p-4 rounded-lg shadow-sm">
        {giftThemesData.map((theme: ThemeItem) => (
          <div
            key={theme.themeId}
            className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-2 overflow-hidden rounded-full border border-gray-200">
              <img
                src={theme.image}
                alt={theme.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-gray-700 font-medium">
              {theme.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftThemes;
