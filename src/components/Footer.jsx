import { repo } from '../data.js'

const links = [
  { href: repo, label: 'GitHub' },
  { href: `${repo}/releases`, label: 'Versions' },
  { href: `${repo}/issues`, label: 'Signaler un problème' },
]

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 border-t border-white/12 pt-7 pb-30 text-[13px] text-white/65">
      <span>© 2026 Vinyl. Apple Music et Spotify sont des marques de leurs propriétaires respectifs.</span>
      <div className="flex flex-wrap gap-5">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="text-white/75 no-underline">{l.label}</a>
        ))}
      </div>
    </footer>
  )
}
