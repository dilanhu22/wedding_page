import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import DressCode from "./pages/DressCode";
import Gifts from "./pages/Gifts";
import Location from "./pages/Location";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/dress-code" element={<DressCode />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/location" element={<Location />} />
        </Route>
      </Routes>
    </>
  );
}
