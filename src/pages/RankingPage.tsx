const RankingPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">전체 랭킹</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-600">
          이곳은 전체 선물 랭킹을 보여주는 페이지입니다.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="p-3 border rounded-md">1. 인기 상품 A</li>
          <li className="p-3 border rounded-md">2. 인기 상품 B</li>
          <li className="p-3 border rounded-md">3. 인기 상품 C</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          더 많은 랭킹 정보가 곧 업데이트될 예정입니다.
        </p>
      </div>
    </div>
  );
};

export default RankingPage;
