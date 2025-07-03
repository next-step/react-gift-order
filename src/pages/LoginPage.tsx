import React, { useState } from "react";

const KakaoLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("로그인 시도:");
    console.log("이메일:", email);
    console.log("비밀번호:", password);

    alert(`로그인 시도\n이메일: ${email}\n비밀번호: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-5xl font-sans font-bold text-black mb-16 select-none cursor-default">
        kakao
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-sm px-6">
        <div className="mb-8">
          <input
            type="email"
            id="inputEmail"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일"
            className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-yellow-400 text-lg placeholder-gray-500 text-gray-800 transition duration-200"
            required
          />
        </div>

        <div className="mb-12">
          <input
            type="password"
            id="inputPassword"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
            className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-yellow-400 text-lg placeholder-gray-500 text-gray-800 transition duration-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-yellow-400 text-black text-l  rounded-md shadow-sm
                     hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
                     transition duration-200"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default KakaoLoginPage;
