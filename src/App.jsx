import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home" ;
import Layout from "./pages/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}