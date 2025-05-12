import { HashRouter, Route, Routes } from "react-router";
import App from "../App";
import HookPage from "./pages/HookPage";
import ModalPage from "./pages/ModalPage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/modal' element={<ModalPage />} />
        <Route path='/hook' element={<HookPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
