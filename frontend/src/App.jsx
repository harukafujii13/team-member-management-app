import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./routes/ListPage";
import AddPage from "./routes/AddPage";
import EditPage from "./routes/EditPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
