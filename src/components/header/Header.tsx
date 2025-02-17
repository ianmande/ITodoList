import { useDarkMode } from '../../hooks/useDarkMode';

import bgDesktopLight from '../../assets/images/bg-desktop-light.jpg';
import bgDesktopDark from '../../assets/images/bg-desktop-dark.jpg';
import bgMobileDark from '../../assets/images/bg-mobile-dark.jpg';
import bgMobileLight from '../../assets/images/bg-mobile-light.jpg';

const Header = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <picture className="absolute z-0 top-0 left-0 right-0 w-full">
      <source
        media="(max-width: 375px)"
        srcSet={isDarkMode ? bgMobileDark : bgMobileLight}
      />
      <img
        src={isDarkMode ? bgDesktopDark : bgDesktopLight}
        alt="Background"
        className="w-full"
      />
    </picture>
  );
};

export default Header;
