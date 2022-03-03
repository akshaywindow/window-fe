import './Styles/App.css'
import Search from './Components/Search';
import { Routes, Route } from 'react-router-dom';
import Collection from './Components/Collection';

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
      <Route path="/collection" element={ <Collection /> } />
    </Routes>
  );
}

export default WebRoutes;