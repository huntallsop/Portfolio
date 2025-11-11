import React from "react";
import { Link } from "react-router-dom";
import tellerDashboard from "../../assets/Tellerdashboard.png";

function Group1() {
  return (
    <div className="h-[497px] relative rounded-[12px] shrink-0 w-full">
      <img
        alt="Teller Dashboard"
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
    <section className="flex flex-col gap-[56px] w-full" aria-labelledby="loan-servicing-title">
      <div className="flex flex-col gap-[24px] text-white">
        <div className="flex flex-col gap-[12px]">
          <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#90a1b9]">
            Case Study
          </span>
          <h1 id="loan-servicing-title" className="text-[56px] leading-[62px] font-semibold">
            Loan Servicing Teller Dashboard
          </h1>
        </div>
        <p className="text-[18px] leading-[28px] text-[#d0dae8] max-w-[680px]">
          Building a unified dashboard experience that empowers tellers to process payments, manage
          customer inquiries, and monitor account health without toggling between fragmented legacy
          tools.
        </p>
      </div>
      <Group1 />
    </section>
  );
}

function Frame7() {
  return (
    <section className="grid gap-[32px] w-full" aria-label="Project Overview">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[32px] py-[28px] text-white">
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#90a1b9] mb-[12px]">
            Role
          </h2>
          <p className="text-[18px] leading-[28px] text-[#d0dae8]">Lead Product Designer</p>
        </div>
        <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[32px] py-[28px] text-white">
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#90a1b9] mb-[12px]">
            Timeline
          </h2>
          <p className="text-[18px] leading-[28px] text-[#d0dae8]">12 weeks, Q1 2024</p>
        </div>
        <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[32px] py-[28px] text-white">
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#90a1b9] mb-[12px]">
            Team
          </h2>
          <p className="text-[18px] leading-[28px] text-[#d0dae8]">1 PM, 5 engineers, 2 data analysts</p>
        </div>
      </div>
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px] text-white">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[16px]">Project Overview</h2>
        <p className="text-[18px] leading-[30px] text-[#d0dae8]">
          Gold Point Systems asked for a modernized teller experience that could reduce training time
          and minimize operational errors. The existing workflow forced employees to jump between up to
          six browser tabs to complete a single customer request. My objective was to bring those
          disjointed tasks into a streamlined, insight-driven workspace.
        </p>
      </div>
    </section>
  );
}

function Frame6() {
  return (
    <section className="grid gap-[32px] w-full text-white" aria-label="Challenges and Goals">
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px]">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[24px]">The Challenge</h2>
        <ul className="space-y-[16px] text-[18px] leading-[30px] text-[#d0dae8] list-disc list-inside">
          <li>Legacy tools slowed down daily teller operations and obscured key customer insights.</li>
          <li>Inconsistent data between systems created delays and eroded confidence in recommendations.</li>
          <li>Supervisors needed visibility into branch performance to coach and support their teams.</li>
        </ul>
      </div>
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px]">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[24px]">Success Metrics</h2>
        <ul className="space-y-[16px] text-[18px] leading-[30px] text-[#d0dae8] list-disc list-inside">
          <li>Reduce average transaction time by 35% across top teller tasks.</li>
          <li>Improve cross-sell offer acceptance by 20% through contextual prompts.</li>
          <li>Increase supervisor visibility into branch health with daily actionable insights.</li>
        </ul>
      </div>
    </section>
  );
}

function Frame5() {
  return (
    <section className="grid gap-[32px] w-full text-white" aria-label="Process">
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px]">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[20px]">Discovery</h2>
        <p className="text-[18px] leading-[30px] text-[#d0dae8]">
          I conducted contextual inquiries with 12 tellers across four branches, mapping their workflows
          and identifying pain points. Personas highlighted two critical user groups: fast-paced branch
          tellers who valued speed, and senior supervisors who prioritized oversight.
        </p>
      </div>
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px]">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[20px]">Ideation</h2>
        <p className="text-[18px] leading-[30px] text-[#d0dae8]">
          Leveraging journey maps and service blueprints, we aligned on a unified dashboard that surfaced
          the most critical teller actions. I facilitated design studios with engineering and operations
          stakeholders to evaluate feasibility and data needs for each concept.
        </p>
      </div>
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px]">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[20px]">Prototyping & Testing</h2>
        <p className="text-[18px] leading-[30px] text-[#d0dae8]">
          High-fidelity prototypes enabled remote usability sessions with 14 tellers. Iterations focused on
          reorganizing navigation, simplifying payment flows, and adding inline insights that flag risk or
          opportunity at the moment of service.
        </p>
      </div>
    </section>
  );
}

function Frame4() {
  return (
    <section className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px] w-full text-white" aria-label="Solution Highlights">
      <h2 className="text-[24px] leading-[34px] font-semibold mb-[24px]">Solution Highlights</h2>
      <ul className="space-y-[16px] text-[18px] leading-[30px] text-[#d0dae8] list-disc list-inside">
        <li>
          Personalized teller workspace that centralizes daily tasks, customer context, and branch goals in
          a single responsive layout.
        </li>
        <li>
          Modular cards for payments, customer insights, and alerts allow branches to prioritize the data
          they need most without custom development.
        </li>
        <li>
          Supervisor dashboard with live KPIs and coaching cues derived from teller performance and
          customer sentiment signals.
        </li>
      </ul>
    </section>
  );
}

function Frame3() {
  return (
    <section className="grid md:grid-cols-2 gap-[32px] w-full text-white" aria-label="Impact">
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px]">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[24px]">Impact</h2>
        <p className="text-[18px] leading-[30px] text-[#d0dae8]">
          Pilot branches recorded a 42% reduction in time-to-complete for high-volume teller tasks within
          the first month. The contextual insights surfaced in the dashboard resulted in a 27% lift in
          relevant product recommendations.
        </p>
      </div>
      <div className="border border-[rgba(144,161,185,0.2)] rounded-[16px] px-[36px] py-[40px]">
        <h2 className="text-[24px] leading-[34px] font-semibold mb-[24px]">What&apos;s Next</h2>
        <p className="text-[18px] leading-[30px] text-[#d0dae8]">
          We are extending the design system to cover branch manager workflows, including staffing and
          coaching tasks. Additional machine learning capabilities will surface retention alerts and
          pre-approved offers, creating a full-service relationship management toolkit.
        </p>
      </div>
    </section>
  );
}

function Frame11() {
  return (
    <div className="flex flex-col gap-[96px] w-full max-w-[1100px]">
      <Frame1 />
      <Frame7 />
      <Frame6 />
      <Frame5 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}

export default function LoanServicingCaseStudy() {
  return (
    <div className="bg-[#111f36] relative min-h-screen w-full" data-name="Loan Servicing Case Study">
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

      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[1299px] items-center pb-[50px] pt-[60px] px-[273px] relative w-full max-w-[1440px]">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}
