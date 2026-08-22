import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getResearchStudy, researchStudies } from "../data";

export function generateStaticParams() {
  return researchStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getResearchStudy(slug);
  return study ? { title: `${study.title} | Madushan Bandara`, description: study.description } : {};
}

export default async function ResearchDetailPage({ params }) {
  const { slug } = await params;
  const study = getResearchStudy(slug);
  if (!study) notFound();
  const galleryVisuals = [
    { src: study.image, alt: study.imageAlt, caption: study.imageCaption },
    ...(study.gallery || []),
  ];

  return (
    <main className="innerPage researchDetailPage" id="top">
      <header className="siteHeader"><nav className="shell nav"><Link className="brand" href="/"><span>M</span>B</Link><Link className="outlineButton navButton" href="/research">All research <span aria-hidden="true">↗</span></Link></nav></header>
      <article className="researchDetail shell">
        <Link className="backLink" href="/research"><span aria-hidden="true">←</span> Research portfolio</Link>
        <header className="researchDetailHeader">
          <p>{study.type} <i>/</i> {study.field}</p>
          <h1>{study.title}</h1>
          <div className="researchDetailActions"><a className="primaryButton" href={study.pdf} target="_blank" rel="noreferrer">Read full PDF <span aria-hidden="true">↗</span></a><span>{study.pages} pages · Opens in a new tab</span></div>
        </header>
        <div className="researchDetailGrid">
          <section><span className="detailLabel">Description</span><p className="detailLead">{study.description}</p></section>
          <aside className="researchFacts"><div><span>Research design</span><strong>{study.type}</strong></div><div><span>Sample</span><strong>{study.sample}</strong></div><div><span>Tools</span><strong>{study.tools.join(" · ")}</strong></div></aside>
          <section className="methodSection"><span className="detailLabel">Research method</span><p>{study.method}</p></section>
          <section className="topicSection"><span className="detailLabel">Research topics &amp; keywords</span><div className="detailTopics">{study.topics.map((topic) => <span key={topic}>{topic}</span>)}</div></section>
        </div>
        <section className="researchGallerySection" aria-labelledby="research-gallery-title">
          <div className="researchGalleryHeading"><span>Visual evidence</span><h2 id="research-gallery-title">Research at a glance.</h2><p>Selected frameworks, experimental materials, and results from the original study.</p></div>
          <div className="aiResearchGallery" aria-label={`${study.title} research gallery`}>
          {galleryVisuals.map((visual, index) => (
            <figure key={visual.src}>
              <Image src={visual.src} alt={visual.alt} fill priority={index === 0} sizes="(max-width: 620px) 100vw, (max-width: 950px) 50vw, 380px" />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{visual.caption}</figcaption>
            </figure>
          ))}
          </div>
        </section>
      </article>
      <footer className="shell footer"><span>© {new Date().getFullYear()} Madushan Bandara.</span><div><Link href="/research">All research</Link><Link href="/">Home</Link><a href="#top">↑</a></div></footer>
    </main>
  );
}
