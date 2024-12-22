import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PATHS } from './constants/paths';

import Main from "./pages/Main/Main"
import History from "./pages/History/History";
import Favorite from "./pages/Favorite/Favorite";
import Recommend from "./pages/Recommend/Recommend";

function App() {

  return (
    <Router>
      <Routes>
        <Route path={PATHS.HOME} element={<Main />} />
        <Route path={PATHS.HISTORY} element={<History />} />
        <Route path={PATHS.FAVORITE} element={<Favorite />} />
        <Route path={PATHS.RECOMMEND} element={<Recommend />} />
      </Routes>
    </Router>
  )
}

export default App