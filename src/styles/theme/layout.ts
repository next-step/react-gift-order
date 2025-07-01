export const layout = {
  width: {
    container: '720px',
  },
  height: {
    viewport: '100vh',
  },
  grid: {
    columns: {
      fixed2: 'repeat(2, 1fr)',
      fixed3: 'repeat(3, 1fr)',
      fixed4: 'repeat(4, 1fr)',
      fixed5: 'repeat(5, 1fr)',
    },
    gaps: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
    },
  },
} as const;
