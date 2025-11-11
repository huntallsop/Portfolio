import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import PastCompanies from "./components/PastCompanies/PastCompanies";
import Work from "./components/Work/Work";
import Hello from "./components/Hello/Hello";
import Footer from "./components/Footer/Footer";
import LoanServicingCaseStudy from "./pages/LoanServicingCaseStudy";

function HomePage() {
  return (
    <main>
      <Hero />
      <PastCompanies />
      <Work />
      <Hello />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/loan-servicing-case-study"
          element={<LoanServicingCaseStudy />}
        />
      </Routes>
    </BrowserRouter>
  );
}
