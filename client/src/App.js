import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
