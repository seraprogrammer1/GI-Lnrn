import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "./components/css/results.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Accounts from "./components/pages/account";
import Quiz from "./components/pages/quiz";
import "materialize-css/dist/css/materialize.min.css";
import Questions from "./components/pages/questions";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
