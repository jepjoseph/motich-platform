import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Solutions from "./pages/Solutions/Solutions";
import Products from "./pages/Products/Products";
import Demo from "./pages/Demo/Demo";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blog";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />

          <Route path="/products" element={<Products />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
