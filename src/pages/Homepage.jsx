import Home from "../components/Home";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";


export default function Homepage() {
  return (
    <section className="w-full bg-[#F4F6F8] pt-[2px] space-y-14">
      <Home />
      <Features />
      <HowItWorks/>
    </section>
  )
}
