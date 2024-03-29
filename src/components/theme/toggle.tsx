"use client";

import cookieJar from "js-cookie";
import { memo, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = ({ initialTheme }: { initialTheme: "light" | "dark" }) => {
  const [theme, setTheme] = useState(initialTheme ?? "dark");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleThemeChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (isTransitioning) return;

    setIsTransitioning(true);

    const newTheme = theme === "dark" ? "light" : "dark";

    cookieJar.set("theme", newTheme, {
      expires: 365,
    });
    setTheme(newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <button
      onClick={(e) => handleThemeChange(e)}
      aria-roledescription="This button toggles the theme of the website."
      disabled={isTransitioning}
      aria-disabled={isTransitioning}
      className="text-background bg-foreground ring-foreground border-background flex h-12 w-auto cursor-pointer items-center justify-center rounded-xl border-2 py-2 px-3 font-medium hover:ring-2"
    >
      <ThemeIcon theme={theme} />
    </button>
  );
};

const ThemeIcon = memo(
  ({ theme }: { theme: "light" | "dark" }) => {
    switch (theme) {
      case "light":
        return (
          <>
            <LuMoon className="h-6 w-auto" />
            <span className="sr-only">Toggle to dark mode</span>
          </>
        );
      case "dark":
        return (
          <>
            <LuSun className="h-6 w-auto" />
            <span className="sr-only">Toggle to light mode</span>
          </>
        );
    }
  },
  (prevProps, nextProps) => prevProps.theme === nextProps.theme,
);
ThemeIcon.displayName = "ThemeIcon";

export default ThemeToggle;
