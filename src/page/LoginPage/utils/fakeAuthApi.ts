export const fakeAuthApi = (email: string, password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject(new Error('이메일과 비밀번호를 모두 입력하세요.'));
        return;
      }

      // “email:timestamp”를 base64 로 인코딩해 토큰처럼 사용
      const token = btoa(`${email}:${Date.now()}`);
      resolve(token);
    }, 300); // 네트워크 지연 흉내
  });
