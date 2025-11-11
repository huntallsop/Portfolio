import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
      <section
        style={{
          padding: "40px 16px 64px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to="/loan-servicing-case-study"
          className="loan-servicing-case-study-card"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "800px",
            borderRadius: "16px",
            padding: "32px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            textDecoration: "none",
            transition: "background 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
            event.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            event.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}
        >
          <p
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#90a1b9",
              margin: "0 0 8px",
            }}
          >
            Case Study
          </p>
          <h3
            style={{
              margin: "0 0 6px",
              fontSize: "22px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Loan Servicing Teller Dashboard
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#90a1b9",
            }}
          >
            UX/UI · Product Strategy · 2025
          </p>
        </Link>
      </section>
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
