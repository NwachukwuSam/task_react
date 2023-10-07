import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/LoginPage';
import SuccessfulPage from "./pages/SusseccfulPage";
import AddUser from "./components/addUser";
import EditUser from "./components/editUser";
import DeleteUser from "./components/deleteUser";




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/successful" element={<SuccessfulPage/>} />
      <Route path="/addUser" element={<AddUser/>} />
      <Route path="/editUser/:id" element={<EditUser/>} />
      <Route path="/deleteUser/:id" element={<DeleteUser/>} />
    </Routes>
  </Router>
    
  );
}
export default App;
