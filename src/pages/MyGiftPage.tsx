const MyGiftPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">내 선물함</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <p className="text-gray-600 text-lg mb-4">
          아직 받은 선물이 없습니다 🎁
        </p>
        <p className="text-sm text-gray-500">
          친구가 보내줄 때까지 기다려볼까요?
        </p>
        <button className="mt-6 bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-colors">
          선물함 구경하기
        </button>
      </div>
    </div>
  );
};

export default MyGiftPage;
