import { defaultTheme } from '@/themes/default';

export const lightTheme = {
  ...defaultTheme,

  colors: {
    text: '#272727ff',
    textSecondary: '#414141ff',

    brand: '#eb3737ff',
    brandHover: '#EB014A',
    brandActive: '#CF367D',

    secondary: '#A4B0F5',
    secondaryHover: '#577FDE',
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
    surfaceGradient1: 'linear-gradient(45deg, #ffffffff, #A4B0F5)',
    surfaceGradient2: 'linear-gradient(45deg, #ffffffff, #ffaa00)',
    surfaceGradient3: 'linear-gradient(45deg, #ffffffff, #45B69C)',
    surfaceGradient4: 'linear-gradient(45deg, #ffffffff, #577FDE)',
    surfaceGradient5: 'linear-gradient(45deg, #ffffffff, #CF367D)',
  },
};
