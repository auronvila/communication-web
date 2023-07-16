import { useSelector } from "react-redux";

export const useSideBarType = () =>
  useSelector((state) => state.app.sidebarType);
export const useLanguage = () => useSelector((state) => state.app.language);
export const useTheme = () => useSelector((state) => state.app.theme);
