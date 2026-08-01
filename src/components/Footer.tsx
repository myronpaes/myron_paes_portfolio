export default function Footer() {
  return (
    <footer className="border-t border-[#E0DBD3] py-12 px-8 max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-display italic text-2xl text-[#0C0C0C] mb-1">Myron Paes</p>
          <p className="text-xs tracking-wide text-[#8A877F]">Marlton, NJ · Available for opportunities</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:myronpaes@gmail.com"
            className="text-xs tracking-widest uppercase text-[#8A877F] hover:text-[#0C0C0C] transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/myron-paes"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-widest uppercase text-[#8A877F] hover:text-[#0C0C0C] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/assets/myron_paes_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-widest uppercase text-[#8A877F] hover:text-[#0C0C0C] transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
