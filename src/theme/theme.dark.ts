import { DefaultTheme } from 'styled-components';

import { COLOR, basicTheme } from '../config/theme.config';

const darkTheme: DefaultTheme = {
  primary: COLOR.VIOLET,
  secondary: COLOR.PURPLE,

  text: COLOR.WHITE,
  background: COLOR.BLACK,

  black: COLOR.BLACK,
  white: COLOR.WHITE,

  fontFamily: basicTheme.fontFamily,
  contentWidth: basicTheme.contentWidth,
  maxWidth: basicTheme.maxWidth,
};

export default darkTheme;
