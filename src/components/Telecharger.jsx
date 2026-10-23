// CTA : le vinyle revient au centre
export default function Telecharger() {
  return (
    <section id="telecharger" data-stop="4" className="flex min-h-[90vh] scroll-mt-20 items-center justify-center pt-20 pb-35">
      <div className="glass flex w-full max-w-[820px] flex-col items-center gap-6 rounded-[48px] px-[clamp(24px,5vw,64px)] py-[clamp(40px,7vw,88px)] text-center">
        <h2 className="text-[clamp(40px,6vw,76px)] leading-none font-extrabold tracking-[-.045em]">Posez le diamant.</h2>
        <p className="max-w-[520px] text-[19px] leading-normal text-white/80">
          Téléchargez Vinyl gratuitement. [YOUR PRICE] par mois pour l’écoute illimitée.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5 pt-2">
          <a href="#" className="glassbtn flex items-center gap-3 rounded-[18px] bg-white px-[26px] py-3.5 text-on-white no-underline hover:text-on-white">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
            <span className="flex flex-col items-start leading-[1.15]">
              <span className="text-xs">Télécharger sur</span>
              <strong className="text-lg">iPhone &amp; iPad</strong>
            </span>
          </a>
          <a href="#" className="glass glassbtn flex items-center gap-3 rounded-[18px] px-[26px] py-3.5 text-white no-underline">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
            <span className="flex flex-col items-start leading-[1.15]">
              <span className="text-xs">Télécharger pour</span>
              <strong className="text-lg">Mac</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
