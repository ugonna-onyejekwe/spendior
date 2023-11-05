import "./App.css";
import { Nav_bar } from "./components/navbar/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Rooms } from "./pages/rooms/rooms";
import { Services } from "./pages/services/services";
import { Blog } from "./pages/blog/blog";
import { Footer } from "./components/footer/footer";
import { Contact } from "./pages/contact/contact";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
