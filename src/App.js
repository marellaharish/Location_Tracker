import React from 'react';
import "./Components/Css/Home.css"
import "./Components/Css/Responsive.css"
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Views/Login';
function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
