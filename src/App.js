import { useContext, useState } from 'react';
import './App.css';
import { AuthContext } from './components/Auth/AuthContext';
// import Home from './components/Home/Home';
import Register from './components/RegisterationForm/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/RegisterationForm/Login';
import PageOne from './components/Infomation/pages/PageOne';
import PageTwo from './components/Infomation/pages/PageTwo';
import PageThree from './components/Infomation/pages/PageThree';

function App() {
  const { currentUser } = useContext(AuthContext);

  const navigateToHome = () => {
    window.location.href = "/";
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/register" />
    }
    return children;
  }

  return (
    <div className="App">
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><PageOne /></ProtectedRoute>} />
          <Route path="/register" element={<Register navigateToHome={navigateToHome} />} />
          <Route path="/login" element={<Login navigateToHome={navigateToHome} />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
