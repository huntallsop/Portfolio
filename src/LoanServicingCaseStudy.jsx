import React from "react";
import { Link } from "react-router-dom";
import tellerDashboard from "./assets/Tellerdashboard.png";

/** HERO IMAGE BLOCK (replaces Group + Group1 + figma:asset imports) */
function HeroImage() {
  return (
    <div className="h-[497px] relative rounded-[12px] shrink-0 w-full">
      <img
        alt="Teller dashboard"
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
        src={tellerDashboard}
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(144,161,185,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] box-border content-stretch flex gap-[10px] items-start px-[24px] py-[16px] relative rounded-[10px] shrink-0 w-[574px]">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white tracking-[0.1px]">
        I led the complete redesign of their Teller Dashboard, focusing on creating an intuitive,
        efficient, and scalable solution that would serve both B2B clients and their end customers.
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#f9f9f9] text-[14px] tracking-[0.25px] w-[min-content]">
        <span className="text-[#9caec8]">Our financial services client was struggling with an</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#9caec8]"> </span>
        <span className="font-['Inter:Bold',sans-serif] font-bold">outdated loan servicing platform</span>{" "}
        <span className="text-[#9caec8]">{`that created `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold">friction for both customers and internal teams</span>
        <span className="text-[#9caec8]">
          {`. Processing times were lengthy, error rates were high, and customer satisfaction was declining.`}
        </span>
      </p>
      <Frame1 />
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#f9f9f9] text-[24px] tracking-[0.18px] uppercase w-[190px]">
        Overview
      </p>
      <Frame7 />
    </div>
  );
}

function OverviewBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full">
      <OverviewSection />
    </div>
  );
}

function RoleSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white tracking-[0.15px] uppercase w-[160px]">
        My role
      </p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#f9f9f9] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">
        <p className="mb-0">Lead UX/UI Designer</p>
        <p>Product Strategy</p>
      </div>
    </div>
  );
}

function TimelineSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white tracking-[0.15px] uppercase w-[160px]">
        Time line
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#f9f9f9] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">
        12 weeks
      </p>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white tracking-[0.15px] uppercase w-[160px]">
        Team
      </p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#f9f9f9] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">
        <p className="mb-0">Design (2)</p>
        <p className="mb-0">Engineering (5)</p>
        <p>Product (1)</p>
      </div>
    </div>
  );
}

function ToolsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white tracking-[0.15px] uppercase w-[160px]">
        Tools
      </p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#f9f9f9] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">
        <p className="mb-0">Figma</p>
        <p className="mb-0">Figjam</p>
        <p>Azure DevOps</p>
      </div>
    </div>
  );
}

function MetaRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[800px]">
      <RoleSection />
      <TimelineSection />
      <TeamSection />
      <ToolsSection />
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0 text-[#f9f9f9] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[24px] tracking-[0.18px] uppercase w-[190px]">
        The problem space
      </p>
      <div
        className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] tracking-[0.25px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0 not-italic">
          <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9caec8]">
            The old dashboard design was
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[#9caec8] tracking-[0.25px]"> </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-white tracking-[0.25px]">
            cluttered
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal text-white">, </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9caec8]">presenting </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-white tracking-[0.25px]">
            too much information
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9caec8]">{` at once `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9caec8]">making it </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-white tracking-[0.25px]">
            difficult for tellers to locate key data quickly
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal text-white">{`. `}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Regular',sans-serif] mb-0 not-italic text-[#9caec8]">
          The
          <span>
            {` lack of real-time updates meant cash flow tracking was inefficient, often leading to discrepancies in drawer totals. End-of-day reporting was another pain point, as the process for generating and submitting transaction reports was slow and prone to manual errors. Poor transaction searchability further hindered teller efficiency, requiring multiple steps to retrieve past transactions and extending customer service interactions. Lastly, limited drawer breakdown visibility made it challenging for tellers to see a detailed count of bills and coins, complicating cash balancing at the end of shifts.`}
          </span>
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function ProblemBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <ProblemSection />
    </div>
  );
}

function HypothesisSection() {
  return (
    <div className="content-stretch flex gap-[36px] items-start not-italic relative shrink-0 w-[800px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#f9f9f9] text-[24px] tracking-[0.18px] uppercase w-[190px]">
        Hypothesis
      </p>
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9caec8] text-[14px] tracking-[0.25px]">
        Redesigning the Teller Dashboard to simplify navigation, reduce redundant steps, and surface
        critical customer information will enable tellers to complete transactions faster, lower the
        risk of errors, and improve overall efficiency.
      </p>
    </div>
  );
}

function ContentColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <OverviewBlock />
      <MetaRow />
      <ProblemBlock />
      <HypothesisSection />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[800px]">
      <HeroImage />
      <ContentColumn />
    </div>
  );
}

/** MAIN PAGE COMPONENT */
export default function LoanServicingCaseStudy() {
  return (
    <div className="bg-[#111f36] relative min-h-screen text-white" data-name="Body1">
      {/* Back to home arrow */}
      <Link
        to="/"
        className="absolute left-6 top-6 z-10 flex items-center gap-2 text-[#90a1b9] hover:text-white transition"
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

      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center pb-[50px] pt-[80px] px-[24px] md:px-[80px] lg:px-[273px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}
