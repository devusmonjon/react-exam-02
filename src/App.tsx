import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Layout from "./layout";

import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/400-italic.css"; // Specify weight and style

import "@fontsource/hammersmith-one"; // Defaults to weight 400
import "@fontsource/hammersmith-one/400.css"; // Specify weight

import "@fontsource/readex-pro"; // Defaults to weight 400
import "@fontsource/readex-pro/400.css"; // Specify weight // Specify weight and style

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={"404 not found"} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
