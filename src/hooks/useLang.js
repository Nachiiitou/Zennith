import { useLocation } from "react-router-dom";

export const useLang = () => {
  const { pathname } = useLocation();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  return lang;
};
