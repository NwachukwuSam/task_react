
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/LoginPage';
import SuccessfulPage from "./pages/SusseccfulPage";



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/successful" element={<SuccessfulPage/>} />
    </Routes>
  </Router>
    
  );
}
export default App;
