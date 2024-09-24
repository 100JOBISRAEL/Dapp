import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StorePage from "./components/StorePage";
import WalletPage from "./components/WalletPage";
import FriendsPage from "./components/FriendsPage";
import TasksPage from "./components/TasksPage";
import HomePage from "./components/HomePage";
import './App.css'; // Подключение файла CSS для стилей
import logo from './Logo.png'; // Импорт логотипа

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "'Roboto Mono', monospace" }}>
        {/* Отображение логотипа */}
        <img 
          src={logo} 
          alt="Logo" 
          style={{ maxWidth: "400px", margin: "0 auto" }} 
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>

        {/* Навигация */}
        <nav style={{ marginTop: "auto", textAlign: "center", width: "100%" }}>
          <div className="nav-container">
            <Link className="nav-link" to="/wallet">Кошелек</Link>
            <Link className="nav-link" to="/store">Магазин</Link>
            <Link className="nav-link" to="/friends">Друзья</Link>
            <Link className="nav-link" to="/tasks">Задания</Link>
            <Link className="nav-link" to="/">Поиск душ</Link>
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default App;
