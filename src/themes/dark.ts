import { defaultTheme } from '@/themes/default';

export const darkTheme = {
  ...defaultTheme,

  colors: {
    text: '#e0e0e0ff',
    textSecondary: '#577FDE',

    brand: '#eb3737ff',
    brandHover: '#EB014A',
    brandActive: '#CF367D',

    secondary: '#484b5aff',
    secondaryHover: '#272d3aff',
    secondaryActive: '#ffaa00',

    success: '#02f8d7ff',
    inactive: '#414141ff',
  },
  gradients: {
    brandGradient: 'linear-gradient(45deg, #CF367D, #eb3737ff)',
    secondaryGradient: 'linear-gradient(45deg, #ffaa00, #A4B0F5)',
    successGradient: 'linear-gradient(45deg, #02f8d7ff, #45B69C)',
    inactiveGradient: 'linear-gradient(45deg, #ffffffff, #414141ff)',

    // define as cores dos cards por produtos
    surfaceGradient1: 'linear-gradient(45deg, #000000, #A4B0F5)',
    surfaceGradient2: 'linear-gradient(45deg, #000000, #ffaa00)',
    surfaceGradient3: 'linear-gradient(45deg, #000000, #45B69C)',
    surfaceGradient4: 'linear-gradient(45deg, #000000, #577FDE)',
    surfaceGradient5: 'linear-gradient(45deg, #000000, #CF367D)',
  },
};
