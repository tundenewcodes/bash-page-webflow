import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { HOME, INDEX } from "./routes/path";
import HomePage from "./pages/Homepage";

function App() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route>
          <Route element={<HomePage />} path={HOME} />
          <Route element={<HomePage />} path={INDEX} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
