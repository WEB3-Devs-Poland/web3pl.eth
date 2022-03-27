import { useContext } from 'react';
import { RiMenuFill, RiMoonClearFill, RiSunLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import {
  MobileMenuContext,
  MobileMenuContextStateType,
} from 'components/MobileMenu/MobileMenuProvider';
import RenderIf from 'components/RenderIf';
import { NavigationLinks, SocialLinks } from 'config/header.config';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

import * as S from './Header.styles';

const Header = () => {
  const { changeTheme, currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;
  const { changeMenuVisibility } = useContext(MobileMenuContext) as MobileMenuContextStateType;

  return (
    <S.HeaderWrapper>
      <Logo />

      <RenderIf isTrue={window.innerWidth > 800}>
        <S.MenuWrapper>
          {NavigationLinks.map(({ title, link }) => (
            <Link key={link} to={link}>
              {title}
            </Link>
          ))}

          <S.VerticalSeparator />

          {SocialLinks.map(({ Icon, name, link }) => (
            <a key={name} href={link} target="blank">
              <Icon />
            </a>
          ))}

          <S.VerticalSeparator />

          <S.Settings>
            EN
            <RenderIf isTrue={currentTheme === 'light'}>
              <RiSunLine onClick={changeTheme} />
            </RenderIf>
            <RenderIf isTrue={currentTheme === 'dark'}>
              <RiMoonClearFill onClick={changeTheme} />
            </RenderIf>
          </S.Settings>
        </S.MenuWrapper>
      </RenderIf>

      <RenderIf isTrue={window.innerWidth < 800}>
        <S.Mobile>
          <RiMenuFill onClick={changeMenuVisibility} />
        </S.Mobile>
      </RenderIf>
    </S.HeaderWrapper>
  );
};

export default Header;
