// 타이포그래피 토큰

const typography = {
  fontFamily: "'Pretendard', sans-serif",

  // Title
  title1Bold: {
    fontSize: '1.25rem', // 20px
    fontWeight: 700,
    lineHeight: '1.6875rem', // 27px
  },
  title1Regular: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: '1.6875rem',
  },
  title2Bold: {
    fontSize: '1rem', // 16px
    fontWeight: 700,
    lineHeight: '1.5rem', // 24px
  },
  title2Regular: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
  },

  // Subtitle
  subtitle1Bold: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1.375rem', // 22px
  },
  subtitle1Regular: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.5rem', // 24px
  },
  subtitle2Bold: {
    fontSize: '0.875rem', // 14px
    fontWeight: 700,
    lineHeight: '1.1875rem', // 19px
  },
  subtitle2Regular: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.1875rem',
  },

  // Body
  body1Bold: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1.375rem',
  },
  body1Regular: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.375rem',
  },
  body2Bold: {
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1.1875rem',
  },
  body2Regular: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.1875rem',
  },

  // Label
  label1Bold: {
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1.1875rem',
  },
  label1Regular: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.1875rem',
  },
  label2Bold: {
    fontSize: '0.75rem', // 12px
    fontWeight: 700,
    lineHeight: '1rem', // 16px
  },
  label2Regular: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: '1rem',
  },
} as const;

export default typography;
