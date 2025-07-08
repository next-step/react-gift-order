import type { SerializedStyles } from "@emotion/react";

interface GiftCardThumbProps {
  onClick: () => void;
  css: SerializedStyles;
  src: string;
  className?: string;
}

export const GiftCardThumb = ({
  onClick,
  css,
  src,
  className,
}: GiftCardThumbProps) => {
  return <img onClick={onClick} css={css} src={src} className={className} />;
};
