import { Link } from "react-router-dom";
import tellerDashboard from "./assets/Tellerdashboard.png";

export default function LoanServicingCaseStudy() {
  return (
    <div className="bg-[#111f36] min-h-screen text-white relative">
      {/* Back arrow */}
      <Link
        to="/"
        className="absolute left-6 top-6 flex items-center gap-2 text-[#90a1b9] hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Home</span>
      </Link>

      {/* Simple header layout for now */}
      <div className="flex flex-col items-center pt-24 px-4 pb-12">
        <img
          src={tellerDashboard}
          alt="Teller Dashboard"
          className="w-full max-w-[800px] rounded-xl border border-white/20"
        />
        <h1 className="text-3xl md:text-4xl font-semibold mt-8 text-center">
          Loan Servicing Teller Dashboard
        </h1>
        <p className="mt-4 text-[#9caec8] text-center max-w-2xl">
          I led the complete redesign of their Teller Dashboard, focusing on creating an intuitive,
          efficient, and scalable solution that would serve both B2B clients and their end customers.
        </p>
      </div>
    </div>
  );
}
