import Link from "next/link";
import Image from "next/image";
import { researchStudies } from "./data";

export const metadata = {
  title: "Research | Madushan Bandara",
  description: "Selected research in AI regulation, investor behavior, finance, and quantitative analysis by Madushan Bandara.",
};

export default function ResearchPage() {
  return (
    <main className="innerPage" id="top">
      <header className="siteHeader">
        <nav className="shell nav" aria-label="Research navigation">
          <Link className="brand" href="/" aria-label="Madushan Bandara, home"><span>M</span>B</Link>
          <div className="navLinks innerNavLinks"><Link href="/#projects">Projects</Link><Link className="active" href="/research">Research</Link><Link href="/#experience">Experience</Link><Link href="/#skills">Skills</Link></div>
          <Link className="outlineButton navButton" href="/">Back home <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      <section className="researchArchiveHero shell">
        <p>Research portfolio</p>
        <h1>Questions investigated.<br/><span>Evidence communicated.</span></h1>
        <div><p>Selected quantitative studies across technology, regulation, finance, and human decision-making.</p><span>{researchStudies.length.toString().padStart(2, "0")} studies</span></div>
      </section>

      <section className="researchArchive shell" aria-label="Selected research studies">
        {researchStudies.map((study, index) => (
          <article className="researchArchiveCard" key={study.slug}>
            <div className="researchArchiveIndex"><span>{(index + 1).toString().padStart(2, "0")}</span><small>{study.type}<br/>{study.field}</small></div>
            <div className="researchArchiveContent">
              <Link className="researchArchiveVisual" href={`/research/${study.slug}`} aria-label={`View ${study.title}`}>
                <span className="researchMosaicMain"><Image src={study.image} alt={study.imageAlt} fill sizes="(max-width: 620px) 66vw, 430px" /></span>
                <span className="researchMosaicSide">
                  {study.gallery.slice(0, 2).map((visual) => <i key={visual.src}><Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 620px) 34vw, 220px" /></i>)}
                </span>
                <span className="researchMosaicLabel">Three perspectives · One study</span>
              </Link>
              <h2>{study.title}</h2>
              <p>{study.description}</p>
              <div className="researchArchiveMeta"><span>{study.sample}</span><span>{study.tools.join(" · ")}</span></div>
              <div className="researchTags">{study.topics.slice(0, 4).map((topic) => <span key={topic}>{topic}</span>)}</div>
            </div>
            <div className="researchArchiveActions">
              <Link href={`/research/${study.slug}`}>View research summary <span aria-hidden="true">↗</span></Link>
              <a href={study.pdf} target="_blank" rel="noreferrer">Read PDF <small>{study.pages} pages</small></a>
            </div>
          </article>
        ))}
      </section>

      <section className="contact shell"><div><p>Interested in my research?</p><h2>Let&apos;s discuss the work.</h2></div><a href="mailto:madushanbandara.info@gmail.com">madushanbandara.info@gmail.com <span aria-hidden="true">↗</span></a></section>
      <footer className="shell footer"><span>© {new Date().getFullYear()} Madushan Bandara.</span><div><Link href="/">Home</Link><a href="#top" aria-label="Back to top">↑</a></div></footer>
    </main>
  );
}
