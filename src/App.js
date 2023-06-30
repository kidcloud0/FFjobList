import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import FFjob from './FFjob';
import AppRoutes from './AppRoutes';
import { Routes,Route, NavLink, Switch} from "react-router-dom";
import Details from "./Details";
import JobList from './ClassCard';

function App() {
  return (
    <div className="App">
      <Nav/> 
      <Routes>
      <Route path="/" element={<FFjob/>}/>
      <Route path="/FF/classes/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
