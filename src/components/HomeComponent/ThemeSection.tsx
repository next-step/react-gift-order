import { useEffect, useState } from "react";
import { ThemeCard } from "./Cards/ThemeCard";
import { getThemes, type Theme } from "../../api/theme";
import { useNavigate } from "react-router-dom";

export const ThemeSection = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleThemeClick = (themeId: number) => {
    navigate(`/themes/${themeId}/products`);
  };

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getThemes();
        setThemes(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("테마를 불러오는 중 알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  if (loading) {
    return (
      <div className="bg-white w-full h-auto p-5 pb-10 text-center">
        <p className="text-xl pt-5 pb-5 pl-3 font-bold">선물 테마</p>
        <p>테마 로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white w-full h-auto p-5 pb-10 text-center text-red-500">
        <p className="text-xl pt-5 pb-5 pl-3 font-bold">선물 테마</p>
        <p>오류 발생: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full h-auto p-5 pb-10 ">
      <p className="text-xl pt-5 pb-5 pl-3 font-bold">선물 테마</p>
      <div className="w-full h-48 mx-auto grid grid-cols-5 gap-4 justify-items-center ">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.themeId}
            category={theme.name}
            img={theme.image}
            onClick={() => handleThemeClick(theme.themeId)}
          />
        ))}
      </div>
    </div>
  );
};
