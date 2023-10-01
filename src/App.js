import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Gallery from "./components/Gallery";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
