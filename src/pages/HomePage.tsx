import { projects, FEATURED_SLUGS } from "../data/portfolio";
import type { PageKind } from "../App";

interface HomePageProps {
  navigate: (page: PageKind) => void;
  onProjectSelect: (slug: string) => void;
}

// Pull only the 4 featured projects, in the order defined by FEATURED_SLUGS
const featuredProjects = FEATURED_SLUGS.map(
  (slug) => projects.find((p) => p.slug === slug)!,
).filter(Boolean);

export default function HomePage({ navigate, onProjectSelect }: HomePageProps) {
  const handleProjectClick = (
    slug: string,
    kind: string,
    externalUrl?: string,
  ) => {
    if (kind === "external" && externalUrl) {
      window.open(externalUrl, "_blank", "noreferrer");
    } else {
      onProjectSelect(slug);
    }
  };

  return (
    <div className="bg-[#F7F6F3]">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-0 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center mb-5">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#8A877F] mb-3">
              Product · Marketing · Data
            </p>

            {/* Name on a single line */}
            <h1 className="font-display text-6xl md:text-7xl leading-none tracking-tight text-[#0C0C0C] mb-4">
              Myron <span className="italic font-light">Paes.</span>
            </h1>

            <p className="text-[14px] text-[#4A4845] leading-relaxed max-w-lg font-light mb-5">
              Rising Junior at NJIT pursuing dual degrees in Data Science &amp;
              Business. My skillset marries holistic ideation with technical
              analytics — building things that matter for people who haven't
              been thought of yet.
            </p>

            {/* Contact strip */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="mailto:myronpaes@gmail.com"
                className="inline-flex items-center gap-2 text-sm border border-[#0C0C0C] text-[#0C0C0C] px-5 py-2 hover:bg-[#0C0C0C] hover:text-[#F7F6F3] transition-colors"
              >
                Contact
              </a>
              <a
                href="/assets/Myron_Paes_Professional_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#8A877F] hover:text-[#0C0C0C] transition-colors"
              >
                Resume ↗
              </a>
              <a
                href="https://linkedin.com/in/myron-paes"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[#8A877F] hover:text-[#0C0C0C] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://medium.com/@myronpaes"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
                className="text-[#8A877F] hover:text-[#0C0C0C] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Portraits */}
          <div className="flex-shrink-0 hidden md:flex flex-col items-end gap-0">
            <div className="flex gap-2">
              {/* Original headshot — shifted to left slot */}
              <div
                className="w-44 h-52 overflow-hidden"
                style={{ border: "1px solid #E0DBD3" }}
              >
                <img
                  src="/assets/headshot-opt.jpg"
                  alt="Myron Paes"
                  className="w-full h-full object-cover object-top"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              {/* New photo — occupies the original headshot position */}
              <div
                className="w-44 h-52 overflow-hidden"
                style={{ border: "1px solid #E0DBD3" }}
              >
                <img
                  src="/assets/headshot2-opt.jpg"
                  alt="Myron Paes"
                  className="w-full h-full object-cover object-top"
                  decoding="async"
                />
              </div>
            </div>
            <p className="text-[9px] tracking-wider uppercase text-[#B0AB9F] mt-1.5">
              Marlton, NJ
            </p>
          </div>
        </div>

        {/* Stories bridge */}
        <div className="border-t border-[#E0DBD3] pt-5 pb-4">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display italic text-xl md:text-2xl text-[#0C0C0C]">
              The stories beyond my resume:
            </p>
            <button
              onClick={() => navigate("projects")}
              className="text-xs tracking-widest uppercase text-[#8A877F] hover:text-[#0C0C0C] transition-colors flex-shrink-0"
            >
              View all →
            </button>
          </div>
        </div>
      </section>

      {/* ── Featured Projects (4 in one row) ──────────────────────────── */}
      <section className="pb-10 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {featuredProjects.map((project) => (
            <button
              key={project.slug}
              onClick={() =>
                handleProjectClick(
                  project.slug,
                  project.kind,
                  project.externalUrl,
                )
              }
              className="project-card group relative overflow-hidden bg-[#EFEDE8] focus:outline-none"
              style={{ aspectRatio: "3 / 4" }}
              title={
                project.kind === "external"
                  ? "Opens external link ↗"
                  : undefined
              }
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ filter: "brightness(0.72) saturate(0.9)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,12,12,0.88) 0%, rgba(12,12,12,0.25) 55%, rgba(12,12,12,0.0) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <p className="text-[8px] tracking-widest uppercase text-[#C8C3BB] mb-0.5 leading-none">
                  {project.category.split(" · ")[0]}
                  {project.kind === "external" && " ↗"}
                </p>
                <h3 className="font-display text-sm leading-snug text-white">
                  {project.title}
                </h3>
                <p className="text-[9px] text-[#A09C95] mt-0.5">
                  {project.year}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
