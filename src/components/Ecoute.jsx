const cards = [
  {
    title: 'La pochette devient l’étiquette',
    text: 'Chaque titre a son disque, aux couleurs de son album.',
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></>,
  },
  {
    title: 'Pause, il ralentit',
    text: 'Le plateau s’arrête, repart, et avance au rythme de la lecture.',
    icon: <><path d="M5 4v16" /><path d="M19 4v16" /><path d="m9 8 6 4-6 4z" /></>,
  },
]

// Écoute : le vinyle passe à gauche, derrière le verre
export default function Ecoute() {
  return (
    <section id="ecoute" data-stop="1" className="flex min-h-[90vh] scroll-mt-20 items-center justify-end py-20">
      <div className="flex min-w-0 flex-[0_1_620px] flex-col gap-[22px]">
        <span className="text-[15px] font-semibold text-eyebrow">Écoute</span>
        <h2 className="text-[clamp(36px,5vw,60px)] leading-[1.04] font-extrabold tracking-[-.04em]">Le disque suit chaque morceau.</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {cards.map((c) => (
            <div key={c.title} className="glass flex flex-col gap-3 rounded-[28px] p-7">
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {c.icon}
              </svg>
              <h3 className="text-[21px] font-bold">{c.title}</h3>
              <p className="text-base leading-[1.55] text-white/75">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
