import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Entities from "./pages/Entities";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 border-b p-4">
        <Link to="/">Home</Link>
        <Link to="/entities">Entities</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
