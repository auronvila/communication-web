import Logo from "./logo";
import Search from "~/layouts/web/components/header/search/index.jsx";
import Auth from "~/layouts/web/components/header/auth/index.jsx";

export default function Header() {
  return (
    <header className="h-14 border-b border-zinc-400 flex items-center px-4 justify-between bg-white sticky top-0">
      <Logo />
      <Search />
      <Auth />
    </header>
  );
}
