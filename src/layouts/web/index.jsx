import { Outlet } from "react-router-dom";
import Header from "~/layouts/web/components/header/index.jsx";

export default function Weblayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
