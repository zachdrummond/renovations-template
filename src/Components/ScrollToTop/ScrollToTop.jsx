import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// SUMMARY - A function that scrolls to the top of the page on every navigation
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}