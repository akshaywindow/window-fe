import './App.css';
import Search from './Search';
import { Routes, Route } from 'react-router-dom';
import Collection from './Collection';

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
      <Route path="/collection" element={ <Collection /> } />
    </Routes>
  );
}

export default WebRoutes;