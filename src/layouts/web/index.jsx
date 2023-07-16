import { Outlet } from "react-router-dom";
import Header from "~/layouts/web/components/header/index.jsx";
import Sidebar from "~/layouts/web/components/sidebar/index.jsx";

export default function Weblayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="p-6 ml-[250px]">
        <Outlet />
      </main>
    </>
  );
}
