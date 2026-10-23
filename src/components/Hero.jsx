const bars = ['', '[animation-delay:.2s]', '[animation-delay:.45s]', '[animation-delay:.1s]']

// Hero : texte à gauche, le vinyle tourne à droite
export default function Hero() {
  return (
    <section id="top" data-stop="0" className="flex min-h-[86vh] scroll-mt-20 items-center py-18 max-[760px]:min-h-0 max-[760px]:pt-24 max-[760px]:pb-35">
      <div className="flex max-w-[560px] flex-col gap-7">
        <div className="glass flex items-center gap-2.5 self-start rounded-full px-4 py-2 text-[13px] font-medium">
          <span aria-hidden="true" className="flex h-3 items-end gap-0.5">
            {bars.map((delay, i) => (
              <span key={i} className={`block h-3 w-[3px] origin-bottom rounded-sm bg-white animate-bar motion-reduce:animate-none ${delay}`} />
            ))}
          </span>
          Toute votre musique, en rotation
        </div>
        <h1 className="text-[clamp(48px,7vw,92px)] leading-[.98] font-extrabold tracking-[-.045em]">
          Votre musique.
          <br />
          <span className="text-white/55">Sur un vinyle.</span>
        </h1>
        <p className="max-w-[480px] text-xl leading-normal text-white/75">
          Vinyl est une app de musique complète, comme celles que vous connaissez. Sauf qu’ici, chaque morceau tourne sur une platine.
        </p>
        <div className="flex flex-wrap gap-3.5 pt-2">
          <a href="#telecharger" className="glassbtn flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-[17px] font-semibold text-on-white no-underline hover:text-on-white">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="m6 11 6 6 6-6" /><path d="M4 21h16" /></svg>
            Télécharger l’app
          </a>
          <a href="#ecoute" className="glass glassbtn flex items-center gap-2.5 rounded-full px-7 py-4 text-[17px] font-semibold text-white no-underline">
            Faire défiler
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
