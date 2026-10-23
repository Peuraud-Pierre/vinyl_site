import { downloads } from '../data.js'

// CTA : le vinyle revient au centre
export default function Telecharger() {
  return (
    <section id="telecharger" data-stop="4" className="flex min-h-[90vh] scroll-mt-20 items-center justify-center pt-20 pb-35">
      <div className="glass flex w-full max-w-[820px] flex-col items-center gap-6 rounded-[48px] px-[clamp(24px,5vw,64px)] py-[clamp(40px,7vw,88px)] text-center">
        <h2 className="text-[clamp(40px,6vw,76px)] leading-none font-extrabold tracking-[-.045em]">Posez le diamant.</h2>
        <p className="max-w-[520px] text-[19px] leading-normal text-white/80">
          Vinyl est gratuit, sans pub ni abonnement. Il se met à jour tout seul à chaque nouvelle version.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5 pt-2">
          <a href={downloads.mac} className="glassbtn flex items-center gap-3 rounded-[18px] bg-white px-[26px] py-3.5 text-on-white no-underline hover:text-on-white">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
            <span className="flex flex-col items-start leading-[1.15]">
              <span className="text-xs">Télécharger pour</span>
              <strong className="text-lg">Mac</strong>
            </span>
          </a>
          <a href={downloads.windows} className="glass glassbtn flex items-center gap-3 rounded-[18px] px-[26px] py-3.5 text-white no-underline">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.5 10.5 4.5v7H3z" /><path d="M13 4.2 21 3v8.5h-8z" /><path d="M3 13.5h7.5v7L3 19.5z" /><path d="M13 13.5h8V21l-8-1.2z" /></svg>
            <span className="flex flex-col items-start leading-[1.15]">
              <span className="text-xs">Télécharger pour</span>
              <strong className="text-lg">Windows</strong>
            </span>
          </a>
        </div>
        <p className="max-w-[560px] text-sm leading-normal text-white/65">
          Mac avec puce Apple · Windows 10 et 11. Il vous faut Apple Music ou Spotify.
          Au premier lancement sur Mac, autorisez Vinyl à piloter Musique et Spotify.{' '}
          <a href={downloads.releases} className="text-white/85 underline underline-offset-3">Toutes les versions</a>
        </p>
      </div>
    </section>
  )
}
