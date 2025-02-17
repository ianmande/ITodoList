import Moon from '../../assets/images/icon-moon.svg';
import Sun from '../../assets/images/icon-sun.svg';
import { useDarkMode } from '../../hooks/useDarkMode';

const TitleAndSwitchMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex justify-between">
      <h1 className="text-white font-bold text-4xl tracking-[13px]">TODO</h1>

      <picture onClick={toggleDarkMode} className="cursor-pointer">
        <img src={isDarkMode ? Sun : Moon} alt="Background" className="w-6" />
      </picture>
    </div>
  );
};

export default TitleAndSwitchMode;
