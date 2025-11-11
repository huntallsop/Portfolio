import React from "react";
import { Link } from "react-router-dom";

/**
 * @figmaAssetKey fa707ca4732e9518cbd2bd3cce8a2cdd48fb641c
 */
function Ellipse({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative shrink-0 size-[3px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 3 3"
        >
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, white)" r="1.5" />
        </svg>
      </div>
    </div>
  );
}

function Ellipse1() {
  return (
    <div className="h-[5px] relative shrink-0 w-[3px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 3 5"
      >
        <circle cx="1.5" cy="3.5" fill="var(--fill-0, white)" r="1.5" />
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(194,199,206,0.1)] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] text-[10px] text-white tracking-[0.4px]">
        UX/UI Design
      </p>
      <Ellipse1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] text-[10px] text-white tracking-[0.4px]">
        Product strategy
      </p>
      <Ellipse className="box-border flex items-center pt-[2px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] text-[10px] text-white tracking-[0.4px]">
        2025
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex flex-col gap-[24px] items-center w-full">
      <p
        className="bg-clip-text bg-gradient-to-r font-['Inter:Light',sans-serif] font-light from-[#f9f9f9] to-[#6d7a8e] text-[57px]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        Revamping Loan Servicing
      </p>
      <p className="font-['Inter:Regular',sans-serif] text-[#90a1b9] text-[25px] text-center leading-[42px]">
        Designing a scalable, user-centered lending platform that reduced
        processing time by{" "}
        <span className="font-semibold text-[#00d492]">67%</span> and increased
        customer satisfaction scores by{" "}
        <span className="font-semibold text-[#51a2ff]">45%</span>.
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex gap-[27px] items-start">
      <p className="text-[#90a1b9] text-[12px]">12 weeks</p>
      <p className="text-[#90a1b9] text-[12px]">Lead Designer</p>
      <p className="text-[#90a1b9] text-[12px]">B2B FinTech</p>
    </div>
  );
}

export default function LoanServicingCaseStudy() {
  return (
    <div className="relative min-h-screen bg-[#111f36] text-white flex flex-col items-center justify-center px-[292px] py-[100px]">
      {/* Back to Home arrow */}
      <Link
        to="/"
        className="absolute left-6 top-6 flex items-center gap-2 text-[#90a1b9] hover:text-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm">Back to Home</span>
      </Link>

      <Frame />
      <Frame2 />
      <Frame6 />
    </div>
  );
}
