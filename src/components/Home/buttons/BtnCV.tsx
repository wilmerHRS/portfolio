import React from "react";

const BtnCV = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const url = "pdf/WilmerReluzSalvador.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "WilmerReluzSalvador.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="border-2 border-blue-500 text-blue-500 rounded-md px-4 sm:px-9 py-3 transition duration-300 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-white dark:hover:bg-cyan-400 dark:border-cyan-400 dark:text-cyan-400 dark:hover:text-black font-semibold"
      onClick={handleClick}
    >
      Descargar CV
    </button>
  );
};

export default BtnCV;
