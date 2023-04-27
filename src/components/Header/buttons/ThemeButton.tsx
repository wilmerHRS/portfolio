import { ReactNode, useEffect, useState } from "react";
// import { IoMdSunny } from "react-icons/io";
// import { HiMoon } from "react-icons/hi";
// import { Icon } from "astro-icon";
import { changeTheme } from "src/helpers/theme";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  iconLight?: JSX.Element;
  iconDark?: JSX.Element;
}

const ThemeButton = ({ children, iconLight, iconDark }: Props) => {
  const [isDark, setIsDark] = useState(false);

  const theme = () => {
    if (localStorage.theme === "dark") setIsDark(true);
  };

  const handleClick = () => {
    changeTheme(!isDark);
    setIsDark(!isDark);
  };

  useEffect(() => {
    theme();
  }, []);

  return (
    <button
      className="transition ease-in-out bg-slate-200 dark:bg-zinc-700 hover:bg-blue-500 hover:text-white dark:hover:bg-cyan-400 rounded-full p-2 h-9 w-9"
      onClick={handleClick}
    >
      {isDark ? iconLight : iconDark}
    </button>
  );
};

export default ThemeButton;
