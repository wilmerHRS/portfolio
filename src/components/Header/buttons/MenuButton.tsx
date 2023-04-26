import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const MenuButton = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpenMenu(!openMenu);

    let menu = document.querySelector(".c-menu");
    menu?.classList.toggle("open");
  };

  return (
    <button
      className="inline-block sm:hidden transition ease-in-out bg-slate-200 dark:bg-zinc-700 hover:bg-blue-500 hover:text-white dark:hover:bg-cyan-400 rounded-md p-2 ml-4"
      onClick={handleClick}
    >
      {openMenu ? <CgClose size={18} /> : <RxHamburgerMenu size={18} />}
    </button>
  );
};

export default MenuButton;
