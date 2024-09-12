// import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.jsx";
import RegistrationPage from "./components/pages/RegistrationPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />}/>
          <Route path="accounts/">
            <Route path="register/" element={<RegistrationPage />} />
            <Route path="login/" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
