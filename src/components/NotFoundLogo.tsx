import React from 'react';

export function NotFoundLogo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"
      alt="not found"
      {...props}
    />
  );
}
