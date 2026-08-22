import Header from "./components/Header";
import { ContactAndFooter, Experience, Hero, Profile, Projects, Research, Skills } from "./components/HomeSections";

export default function Home() {
  return <main id="top">
    <Header />
    <Hero />
    <Profile />
    <Projects />
    <Research />
    <Experience />
    <Skills />
    <ContactAndFooter />
  </main>;
}
