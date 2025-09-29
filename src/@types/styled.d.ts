import 'styled-components';
import { lightTheme } from '@/themes/light';

//cria a tipagem baseada no tema
type ThemeType = typeof lightTheme;

//faz um merge da tipagem do styled components com a tipagem do ThemeType
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
