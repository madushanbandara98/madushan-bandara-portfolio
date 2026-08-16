"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    icon: "01",
    title: "Cargo Management Web Application",
    summary: "Re-engineered a Java desktop tool as a secure cloud logistics platform for managing shipments, consignments, and customers—with role-based access, document generation, and container tracking.",
    tags: ["React", "Express", "MongoDB"],
    links: [
      ["View live project", "https://containerdesk.company"],
      ["View repository", "https://github.com/madushanbandara98/Cargo_Management_System"],
    ],
    visual: "cargo",
    screenshots: ["cargo-login-redacted.webp", "cargo-shipments-redacted.webp", "cargo-customer-redacted.webp", "cargo-items-redacted.webp", "cargo-payment-redacted.webp", "cargo-delivery-redacted.webp"],
  },
  {
    icon: "02",
    title: "Employee Task Tracking Web Application",
    summary: "Built a role-based workforce platform for recording tasks, working time, delays, outputs, and tools—with department dashboards, employee administration, and weekly PDF reporting.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    links: [
      ["View live project", "https://ett-ten.vercel.app/"],
      ["View repository", "https://github.com/madushanbandara98/Mitarbeiter_Aufgaben_Tracker"],
    ],
    visual: "tasks",
    screenshots: ["tasks-login.webp", "tasks-register.webp", "tasks-dashboard.webp", "tasks-team-report.webp", "tasks-company-chart.webp", "tasks-admin-dashboard.webp", "tasks-profile.webp", "tasks-new-task.webp", "tasks-task-log.webp"],
  },
  {
    icon: "03",
    title: "Santa Blast Factory",
    summary: "Co-developed a Christmas-themed action-puzzle maze with timed bombs, destructible environments, collision-based combat, hidden upgrades, and a rescue-and-escape objective.",
    tags: ["Java", "LibGDX", "Box2D"],
    links: [["View repository", "https://github.com/madushanbandara98/Santa_Blast_Factory"]],
    visual: "game",
    screenshots: ["santa-start.webp", "santa-map.webp", "santa-rescue.webp"],
  },
];

function ProjectSlideshow({ screenshots, initialDelay }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer;
    const scheduleNext = () => {
      const naturalDelay = 6000 + Math.random() * 4000;
      timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
        scheduleNext();
      }, naturalDelay);
    };
    const startTimer = window.setTimeout(scheduleNext, initialDelay);
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(timer);
    };
  }, [initialDelay, screenshots.length]);

  return <div className="projectScreens" aria-label="Project interface preview">
    {screenshots.map((screenshot, index) => <i className={index === activeIndex ? "isActive" : ""} key={screenshot} style={{ backgroundImage: `url(/${screenshot})` }} aria-hidden={index !== activeIndex} />)}
  </div>;
}

const disciplines = [
  { icon: "</>", title: "Software Development", items: ["Full-stack web development", "Database design", "API development", "Testing & documentation"] },
  { icon: "AI", title: "Technology & Data", items: ["Technical analysis", "Process digitisation", "Data-informed decisions", "Solution design"] },
  { icon: "PM", title: "Project Management", items: ["Planning & coordination", "Agile ways of working", "Stakeholder communication", "Risk & resource awareness"] },
  { icon: "↗", title: "Business & Research", items: ["Requirements engineering", "Budget monitoring", "Procurement", "Structured reporting"] },
];

const experience = [
  ["2024 — Present", "Working Student", "Münchner Suppenküche · Munich", "Supporting digitally assisted production, inventory processes, and employee onboarding with the CSB enterprise system."],
  ["2023 — 2024", "Finance Responsible", "Laundromat · Kalutara", "Managed reporting, budget planning, financial monitoring, and process improvement."],
  ["2022 — 2023", "Finance Intern", "National Water Supply & Drainage Board", "Coordinated procurement, suppliers, payments, project budgets, and structured documentation."],
  ["2018 — Present", "Freelance Graphic Designer", "Independent", "Deliver client work from requirements clarification and communication through timely completion."],
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "experience", "skills"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <header className="siteHeader">
        <nav className="shell nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Madushan Bandara, home"><span>M</span>B</a>
          <div className="navLinks">
            <a className={activeSection === "home" ? "active" : ""} href="#home">Home</a>
            <a className={activeSection === "about" ? "active" : ""} href="#about">About</a>
            <a className={activeSection === "projects" ? "active" : ""} href="#projects">Projects</a>
            <a className={activeSection === "experience" ? "active" : ""} href="#experience">Experience</a>
            <a className={activeSection === "skills" ? "active" : ""} href="#skills">Skills</a>
          </div>
          <a className="outlineButton navButton" href="mailto:madushanbandara.info@gmail.com">Let&apos;s talk <Arrow /></a>
        </nav>
      </header>

      <section className="hero shell" id="home" aria-labelledby="hero-title">
        <div className="heroPhotoGrid" aria-hidden="true">
          <span style={{ backgroundImage: "url(/hero-real-1.webp)" }} />
        </div>
        <div className="heroCopy">
          <p className="intro">Hello, I&apos;m</p>
          <h1 id="hero-title">Madushan<br/><span>Bandara</span></h1>
          <p className="roles">Management <i>x</i> Technology</p>
          <p className="lede">I connect business thinking with practical technology—turning complex requirements into clear, useful, and well-delivered solutions.</p>
          <div className="actions">
            <a className="primaryButton" href="#projects">View my work <span aria-hidden="true">→</span></a>
            <a className="outlineButton" href="mailto:madushanbandara.info@gmail.com">Contact me <Arrow /></a>
            <a className="socialButton" href="https://www.linkedin.com/in/madushan-bandara-de" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
          </div>
          <aside className="heroFacts" aria-label="Professional overview">
            <div><span>Based in</span><strong>Munich, Germany</strong></div>
            <div><span>Origin</span><strong>Sri Lanka</strong></div>
            <div><span>Currently</span><strong>M.Sc. Management &amp; Technology · TUM</strong></div>
            <div><span>Status</span><strong className="available"><i/> Open to opportunities</strong></div>
          </aside>
        </div>

      </section>

      <section className="profile shell" id="about">
        <div className="metricsSectionTitle"><p>Profile at a glance</p><h2>Business perspective. Technical capability.</h2></div>
        <div className="metrics">
          <div><b>3</b><span>Selected projects</span></div>
          <div><b>4+</b><span>Professional roles</span></div>
          <div><b>2</b><span>Business &amp; technology degrees</span></div>
          <div><b>DE · LK</b><span>International experience</span></div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="sectionTitle"><div><p>Selected work</p><h2>Projects built with purpose.</h2></div><a href="https://github.com/madushanbandara98" target="_blank" rel="noreferrer">View GitHub <Arrow /></a></div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className={`projectVisual ${project.visual}`}><span>{project.icon}</span>{project.screenshots ? <ProjectSlideshow screenshots={project.screenshots} initialDelay={0} /> : <div className="mockWindow"><i/><i/><i/><b/></div>}</div>
              <div className="projectContent"><p className="projectIndex">CASE STUDY / {project.icon}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="projectLinks">{project.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <Arrow /></a>)}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell experienceSection" id="experience">
        <div className="sectionTitle"><div><p>Experience &amp; education</p><h2>A multidisciplinary path.</h2></div></div>
        <div className="careerGrid">
          <div className="timeline">{experience.map(([date, role, company, detail]) => <article key={`${role}-${date}`}><time>{date}</time><div><h3>{role}</h3><p className="company">{company}</p><p>{detail}</p></div></article>)}</div>
          <aside className="education">
            <p className="label">Education</p>
            <article><time>Current</time><h3>M.Sc. Management &amp; Technology</h3><p>Technical University of Munich (TUM)</p></article>
            <article><time>Completed</time><h3>B.Sc. Management</h3><p>University of Sri Jayewardenepura, Sri Lanka</p></article>
            <blockquote>“I enjoy solving problems, building useful products, and helping teams move from an idea to a clear result.”<cite>— Madushan Bandara</cite></blockquote>
          </aside>
        </div>
      </section>

      <section className="section shell skillsSection" id="skills">
        <div className="sectionTitle"><div><p>Skills &amp; capabilities</p><h2>Business clarity. Technical understanding.</h2></div><p className="sectionIntro">I work across planning, analysis, coordination, and delivery—bringing business and technical perspectives into the same conversation.</p></div>
        <div className="disciplineGrid">
          {disciplines.map((item) => <article key={item.title}><span className="disciplineIcon">{item.icon}</span><h3>{item.title}</h3><ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="contact shell" id="contact"><div><p>Have a role or project in mind?</p><h2>Let&apos;s build something valuable together.</h2></div><a href="mailto:madushanbandara.info@gmail.com">madushanbandara.info@gmail.com <Arrow /></a></section>

      <footer className="shell footer"><span>© {new Date().getFullYear()} Madushan Bandara. All rights reserved.</span><div><a href="https://www.linkedin.com/in/madushan-bandara-de" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/madushanbandara98" target="_blank" rel="noreferrer">GitHub</a><a href="#top" aria-label="Back to top">↑</a></div></footer>
    </main>
  );
}
