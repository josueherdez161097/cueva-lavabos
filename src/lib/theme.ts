export const theme = {
  name: 'Cueva',
  colors: {
    background: '#f7f3ee',
    foreground: '#221f1c',
    surface: '#fffdfa',
    muted: '#6f655d',
    line: '#d9cec3',
    primary: '#4c3728',
    secondary: '#b08b67',
    accent: '#7d8d6d',
    dark: '#161311',
  },
  gradients: {
    hero: 'linear-gradient(135deg, rgba(76,55,40,0.92), rgba(34,31,28,0.82))',
  },
  radius: {
    xl: '1.5rem',
    '2xl': '2rem',
  },
} as const;

export type Theme = typeof theme;
