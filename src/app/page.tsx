import { dependencies, devDependencies } from "package.json";

import { cookies } from "next/headers";

import ThemeToggle from "@/components/theme/toggle";

const depKeys = ["next", "tailwindcss", "react", "react-dom"];
const optionalKeys = ["next-themes", "geist"];

const deps = [
  ...Object.entries(dependencies),
  ...Object.entries(devDependencies),
];
const coreDeps = deps.filter(([key]) => depKeys.includes(key));
const optionalDeps = deps.filter(([key]) => optionalKeys.includes(key));

const HomePage = async () => {
  const cookieJar = cookies();
  const cookieJarTheme = cookieJar.get("theme");

  const theme = cookieJarTheme?.value === "light" ? "light" : "dark";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-8 md:gap-10">
      <h1 className="max-w-md text-balance text-center text-2xl font-bold md:text-4xl">
        Next.js AppRouter TailwindCSS v4 Alpha
      </h1>
      <section className="flex w-full max-w-md flex-col items-center justify-center gap-4 text-balance border-t-2 pt-5 text-center md:pt-10">
        <p>Toggle the theme of the website by clicking the button below:</p>
        <ThemeToggle initialTheme={theme} />
      </section>
      <section className="flex w-full max-w-md flex-col items-center justify-center gap-4 text-balance border-t-2 pt-5 text-center md:pt-10">
        <h2 className="text-xl font-semibold">Core Dependencies</h2>
        <ul className="flex flex-col gap-2">
          {coreDeps.map(([key, value]) => {
            return (
              <li key={key} className="flex gap-2">
                <span className="font-semibold">{key}</span>
                <span className="font-light">{value}</span>
              </li>
            );
          })}
        </ul>

        <h2 className="text-xl font-semibold">Optional Dependencies</h2>
        <ul className="flex flex-col gap-2">
          {optionalDeps.map(([key, value]) => {
            return (
              <li key={key} className="flex gap-2">
                <span className="font-semibold">{key}</span>
                <span className="font-light">{value}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
