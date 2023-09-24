
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import WelcomePage from "./pages/welcomePage";



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/welcome" element={<WelcomePage/>} />
    </Routes>
  </Router>
    
  );
}
export default App;
