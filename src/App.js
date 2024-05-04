import "./App.scss";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import FilterSection from "./components/Filter/FilterSection";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <FilterSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
