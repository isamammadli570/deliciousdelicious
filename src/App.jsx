import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Meals from "./pages/Meals";
import Cocktails from "./pages/Cocktails";
import Contact from "./pages/Contact";
import DetailsPage from "./pages/DetailsPage";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);

  function openSidebar() {
    setIsShow((show) => !show);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<HomePage isShow={isShow} openSidebar={openSidebar} />}
        />
        <Route
          path="meals"
          element={<Meals isShow={isShow} openSidebar={openSidebar} />}
        />
        <Route
          path=":id"
          element={<DetailsPage isShow={isShow} openSidebar={openSidebar} />}
        />

        <Route
          path="cocktails"
          element={<Cocktails isShow={isShow} openSidebar={openSidebar} />}
        />

        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
