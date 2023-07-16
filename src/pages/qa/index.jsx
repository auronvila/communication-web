import { useEffect } from "react";
import { setSidebarType } from "~/stores/app/actions.js";

export default function QADashboard() {
  useEffect(() => {
    setSidebarType("qa");
    return () => {
      setSidebarType("app");
    };
  }, []);
  return <div>QA</div>;
}
