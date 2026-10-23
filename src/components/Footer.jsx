const links = ['Confidentialité', 'Conditions', 'Assistance']

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 border-t border-white/12 pt-7 pb-30 text-[13px] text-white/65">
      <span>© 2026 Vinyl. Tous droits réservés.</span>
      <div className="flex flex-wrap gap-5">
        {links.map((l) => (
          <a key={l} href="#" className="text-white/75 no-underline">{l}</a>
        ))}
      </div>
    </footer>
  )
}
