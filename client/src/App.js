import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/home";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
