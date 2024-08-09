// import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
