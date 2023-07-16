import { useSideBarType } from "~/stores/app/hooks.js";

export default function Sidebar() {
  const type = useSideBarType();
  return (
    <aside className=" w-[250px] h-[calc(100vh-3.5rem)] border-r border-zinc-400 fixed top-[3.5rem] p-4">
      sidebar = {type}
    </aside>
  );
}
