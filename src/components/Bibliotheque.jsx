const tiles = [
  { title: 'Playlists', text: 'Rangées comme des 33 tours.' },
  { title: 'Hors ligne', text: 'Téléchargez, écoutez partout.' },
  { title: 'Paroles', text: 'En direct, sous le diamant.' },
]

export default function Bibliotheque() {
  return (
    <section id="bibliotheque" data-stop="3" className="flex min-h-[90vh] scroll-mt-20 items-center justify-end py-20">
      <div className="flex min-w-0 flex-[0_1_620px] flex-col gap-[22px]">
        <span className="text-[15px] font-semibold text-eyebrow">Bibliothèque</span>
        <h2 className="text-[clamp(36px,5vw,60px)] leading-[1.04] font-extrabold tracking-[-.04em]">Une discothèque, pas une liste.</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3.5">
          {tiles.map((t) => (
            <div key={t.title} className="glass flex flex-col gap-2 rounded-3xl p-[22px]">
              <strong className="text-[17px]">{t.title}</strong>
              <span className="text-sm leading-normal text-white/75">{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
