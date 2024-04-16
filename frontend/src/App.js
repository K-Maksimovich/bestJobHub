import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Search} from "./pages/Search";
import {Profile} from "./pages/Profile";
import {LikedVacancy} from "./pages/LikedVacancy";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/liked-vacancy" element={<LikedVacancy/>} />
          <Route path="/reg" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
