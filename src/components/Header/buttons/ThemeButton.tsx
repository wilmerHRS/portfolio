import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { HiMoon } from "react-icons/hi";
import { changeTheme } from "src/helpers/theme";

const ThemeButton = () => {
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
      className="transition ease-in-out bg-slate-200 dark:bg-zinc-700 hover:bg-blue-500 hover:text-white dark:hover:bg-cyan-400 rounded-full p-2"
      onClick={handleClick}
    >
      {isDark ? <IoMdSunny size={18} /> : <HiMoon size={18} />}
    </button>
  );
};

export default ThemeButton;
