import Arrow from "./Arrow";
import ProjectSlideshow from "./ProjectSlideshow";
import { disciplines, experience, projects, researchCapabilities } from "../data/home";

export function Hero() {
  return <section className="hero shell" id="home" aria-labelledby="hero-title">
    <div className="heroPhotoGrid" aria-hidden="true"><span style={{ backgroundImage: "url(/hero-real-1.webp)" }} /></div>
    <div className="heroCopy">
      <p className="intro">Hello, I&apos;m</p><h1 id="hero-title">Madushan<br/><span>Bandara</span></h1><p className="roles">Management <i>x</i> Technology</p>
      <p className="lede">I connect business thinking with practical technology—turning complex requirements into clear, useful, and well-delivered solutions.</p>
      <div className="actions"><a className="primaryButton" href="#projects">View my work <span aria-hidden="true">→</span></a><a className="outlineButton" href="mailto:madushanbandara.info@gmail.com">Contact me <Arrow /></a><a className="socialButton" href="https://www.linkedin.com/in/madushan-bandara-de" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a></div>
      <aside className="heroFacts" aria-label="Professional overview"><div><span>Based in</span><strong>Munich, Germany</strong></div><div><span>Origin</span><strong>Sri Lanka</strong></div><div><span>Currently</span><strong>M.Sc. Management &amp; Technology · TUM</strong></div><div><span>Status</span><strong className="available"><i/> Open to opportunities</strong></div></aside>
    </div>
  </section>;
}

export function Profile() {
  return <section className="profile shell" id="about"><div className="metricsSectionTitle"><p>Profile at a glance</p><h2>Business perspective. Technical capability.</h2></div><div className="metrics"><div><b>3</b><span>Selected projects</span></div><div><b>4+</b><span>Professional roles</span></div><div><b>2</b><span>Business &amp; technology degrees</span></div><div><b>DE · LK</b><span>International experience</span></div></div></section>;
}

export function Projects() {
  return <section className="section shell" id="projects"><div className="sectionTitle"><div><p>Selected work</p><h2>Projects built with purpose.</h2></div><a href="https://github.com/madushanbandara98" target="_blank" rel="noreferrer">View GitHub <Arrow /></a></div><div className="projectGrid">{projects.map((project) => <article className="projectCard" key={project.title}><div className={`projectVisual ${project.visual}`}><span>{project.icon}</span><ProjectSlideshow screenshots={project.screenshots} /></div><div className="projectContent"><p className="projectIndex">CASE STUDY / {project.icon}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="projectLinks">{project.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <Arrow /></a>)}</div></div></article>)}</div></section>;
}

export function Research() {
  return <section className="section shell researchSection" id="research"><div className="sectionTitle researchHeading"><div><p>Research capabilities</p><h2>From questions to useful evidence.</h2></div><p className="sectionIntro">My interdisciplinary background in management and technology helps me approach research with structure, analytical thinking, and an understanding of both organisational and technical contexts.</p></div><div className="researchLayout"><aside className="researchStatement"><span className="researchEyebrow">How I contribute</span><h3>Rigorous thinking.<br/>Practical perspective.</h3><p>I can support research teams across the full process—from clarifying the problem and reviewing evidence to analysing information and communicating the result.</p><div className="researchFlow" aria-label="Research workflow"><span>Define</span><i>→</i><span>Investigate</span><i>→</i><span>Analyse</span><i>→</i><span>Communicate</span></div></aside><div className="researchGrid">{researchCapabilities.map((capability) => <article key={capability.title}><span className="researchNumber">{capability.number}</span><h3>{capability.title}</h3><p>{capability.detail}</p><div className="researchTags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></div><div className="researchPortfolioCta"><div><span>Selected studies</span><h3>See the research behind the capabilities.</h3><p>Explore selected studies in AI regulation, finance, investor behavior, and quantitative analysis.</p></div><a className="primaryButton" href="/research">Explore my research portfolio <Arrow /></a></div></section>;
}

export function Experience() {
  return <section className="section shell experienceSection" id="experience"><div className="sectionTitle"><div><p>Experience &amp; education</p><h2>A multidisciplinary path.</h2></div></div><div className="careerGrid"><div className="timeline">{experience.map(([date, role, company, detail]) => <article key={`${role}-${date}`}><time>{date}</time><div><h3>{role}</h3><p className="company">{company}</p><p>{detail}</p></div></article>)}</div><aside className="education"><p className="label">Education</p><article><time>Current</time><h3>M.Sc. Management &amp; Technology</h3><p>Technical University of Munich (TUM)</p></article><article><time>Completed</time><h3>B.Sc. Management</h3><p>University of Sri Jayewardenepura, Sri Lanka</p></article><blockquote>“I enjoy solving problems, building useful products, and helping teams move from an idea to a clear result.”<cite>— Madushan Bandara</cite></blockquote></aside></div></section>;
}

export function Skills() {
  return <section className="section shell skillsSection" id="skills"><div className="sectionTitle"><div><p>Skills &amp; capabilities</p><h2>Business clarity. Technical understanding.</h2></div><p className="sectionIntro">I work across planning, analysis, coordination, and delivery—bringing business and technical perspectives into the same conversation.</p></div><div className="disciplineGrid">{disciplines.map((item) => <article key={item.title}><span className="disciplineIcon">{item.icon}</span><h3>{item.title}</h3><ul>{item.items.map((text) => <li key={text}>{text}</li>)}</ul></article>)}</div></section>;
}

export function ContactAndFooter() {
  return <><section className="contact shell" id="contact"><div><p>Have a role or project in mind?</p><h2>Let&apos;s build something valuable together.</h2></div><a href="mailto:madushanbandara.info@gmail.com">madushanbandara.info@gmail.com <Arrow /></a></section><footer className="shell footer"><span>© {new Date().getFullYear()} Madushan Bandara. All rights reserved.</span><div><a href="https://www.linkedin.com/in/madushan-bandara-de" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/madushanbandara98" target="_blank" rel="noreferrer">GitHub</a><a href="#top" aria-label="Back to top">↑</a></div></footer></>;
}
