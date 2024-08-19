import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "./components/css/results.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Accounts from "./components/pages/account";
import Quiz from "./components/pages/quiz";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
