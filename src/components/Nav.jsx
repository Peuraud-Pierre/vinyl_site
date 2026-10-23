const links = [
  { href: '#ecoute', label: 'Écoute' },
  { href: '#son', label: 'Le son' },
  { href: '#bibliotheque', label: 'Bibliothèque' },
]

export default function Nav() {
  return (
    <nav
      aria-label="Navigation principale"
      className="glass sticky top-4 z-5 flex flex-wrap items-center justify-between gap-3 rounded-full py-2.5 pr-2.5 pl-[22px] max-[560px]:flex-nowrap max-[560px]:pl-4"
    >
      <a href="#top" className="flex items-center gap-2.5 text-lg font-bold tracking-[-.02em] text-white no-underline">
        <svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="13" cy="13" r="11.5" />
          <circle cx="13" cy="13" r="7" />
          <circle cx="13" cy="13" r="2.2" fill="currentColor" />
        </svg>
        Vinyl
      </a>
      <div className="flex flex-wrap items-center gap-1">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="px-3.5 py-3 text-sm text-white/82 no-underline hover:text-white max-[560px]:hidden">
            {l.label}
          </a>
        ))}
        <a href="#telecharger" className="glassbtn rounded-full bg-white px-5 py-3 text-sm font-semibold text-on-white no-underline hover:text-on-white">
          Télécharger
        </a>
      </div>
    </nav>
  )
}
