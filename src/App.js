import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/LoginPage';
import SuccessfulPage from "./pages/SusseccfulPage";
import AddUser from "./components/addUser";





function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/successful" element={<SuccessfulPage/>} />
      <Route path="/addUser" element={<AddUser/>} />
    </Routes>
  </Router>
    
  );
}
export default App;
