import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/LoginPage';
import SuccessfulPage from "./pages/SusseccfulPage";
import AddUser from "./components/addUser";
import EditUser from "./components/editUser";





function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/successful" element={<SuccessfulPage/>} />
      <Route path="/addUser" element={<AddUser/>} />
      <Route path="/editUser/:id" element={<EditUser/>} />
    </Routes>
  </Router>
    
  );
}
export default App;
