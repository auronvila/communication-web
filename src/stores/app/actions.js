import {
  _setTheme,
  _setLanguage,
  _setSidebarType,
} from "~/stores/app/index.js";
import store from "~/stores/index.js";

export const setTheme = (theme) => store.dispatch(_setTheme(theme));
export const setLanguage = (theme) => store.dispatch(_setLanguage(theme));
export const setSidebarType = (theme) => store.dispatch(_setSidebarType(theme));
