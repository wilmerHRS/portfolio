import React, { useEffect, useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { CgClose } from "react-icons/cg";
// import { Icon } from "astro-icon";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  iconMenu?: JSX.Element;
  iconClose?: JSX.Element;
}

const MenuButton = ({ children, iconMenu, iconClose }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpenMenu(!openMenu);

    let menu = document.querySelector(".c-menu");
    menu?.classList.toggle("open");
  };

  return (
    <button
      className="inline-block sm:hidden transition duration-300 ease-in-out bg-slate-200 dark:bg-zinc-700 hover:bg-blue-500 hover:text-white dark:hover:bg-cyan-400 rounded-md p-2 ml-4 h-9 w-9"
      onClick={handleClick}
    >
      {openMenu ? iconClose : iconMenu}
    </button>
  );
};

export default MenuButton;
