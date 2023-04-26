const changeTheme = (toDark: boolean = true) => {
  if (toDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

const handleTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    changeTheme();
  } else {
    changeTheme(false);
  }
};

export { handleTheme, changeTheme };
