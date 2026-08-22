"use client";

import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const links = [["home", "Home"], ["about", "About"], ["projects", "Projects"], ["research", "Research"], ["experience", "Experience"], ["skills", "Skills"]];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <header className="siteHeader">
    <nav className="shell nav" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Madushan Bandara, home"><span>M</span>B</a>
      <div className="navLinks">{links.map(([id, label]) => <a className={activeSection === id ? "active" : ""} href={`#${id}`} key={id}>{label}</a>)}</div>
      <a className="outlineButton navButton" href="mailto:madushanbandara.info@gmail.com">Let&apos;s talk <Arrow /></a>
    </nav>
  </header>;
}
