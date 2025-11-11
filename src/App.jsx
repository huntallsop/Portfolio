import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import PastCompanies from "./components/PastCompanies/PastCompanies";
import Work from "./components/Work/Work";
import Hello from "./components/Hello/Hello";
import Footer from "./components/Footer/Footer";
import LoanServicingCaseStudy from "./LoanServicingCaseStudy"; // ⬅️ add this line

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* new route for the case study page */}
      <Route path="/loan-servicing" element={<LoanServicingCaseStudy />} />
    </Routes>
  );
}
