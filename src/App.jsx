import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import "./App.css"

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </Router>

  )
}

export default App
