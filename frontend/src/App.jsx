import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./routes/ListPage";
import AddPage from "./routes/AddPage";
import EditPage from "./routes/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ListPage />}
        />
        <Route
          path="/add"
          element={<AddPage />}
        />
        <Route
          path="/edit/:id"
          element={<EditPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
