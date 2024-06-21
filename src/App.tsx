import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleColors from "./components/SingleColors";
import Error404 from "./components/Error404";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color/:id" element={<SingleColors />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
