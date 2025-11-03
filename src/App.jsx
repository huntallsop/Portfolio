import Hero from "./components/Hero/Hero";
import PastCompanies from "./components/PastCompanies/PastCompanies";
import Work from "./components/Work/Work";
import Hello from "./components/Hello/Hello";
import FooterReveal from "./components/Footer/FooterReveal";

export default function App() {
  return (
    <main>
      <Hero />
      <PastCompanies />
      <Work />
      <Hello />
      <FooterReveal /> {/* new, last section */}
    </main>
  );
}
