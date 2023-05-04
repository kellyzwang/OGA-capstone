import './App.css';
import { Home } from './Homepage'
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;