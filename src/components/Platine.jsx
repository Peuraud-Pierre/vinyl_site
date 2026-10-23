const cards = [
  {
    title: 'La pochette au centre',
    text: 'Le disque tourne à 33⅓ tours/min avec la pochette du morceau en cours en étiquette.',
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></>,
  },
  {
    title: 'Le bras, pour de vrai',
    text: 'Glissez le bras sur le disque pour avancer dans le morceau. L’aiguille craque en se posant.',
    icon: <><path d="M19 3v9l-7 7" /><circle cx="19" cy="3" r="1.5" /><path d="m10 17 2 2-2 2-2-2z" /></>,
  },
  {
    title: 'Toujours au premier plan',
    text: 'Un widget rond flotte au-dessus de vos fenêtres : le disque tourne pendant que vous travaillez.',
    icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><circle cx="16" cy="13" r="3" /></>,
  },
  {
    title: 'Les derniers disques sur la table',
    text: 'La pile des derniers écoutés et l’étagère de vos playlists, posées à côté de la platine.',
    icon: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  },
]

// La platine : le vinyle passe à gauche, derrière le verre
export default function Platine() {
  return (
    <section id="platine" data-stop="1" className="flex min-h-[90vh] scroll-mt-20 items-center justify-end py-20">
      <div className="flex min-w-0 flex-[0_1_620px] flex-col gap-[22px]">
        <span className="text-[15px] font-semibold text-eyebrow">La platine</span>
        <h2 className="text-[clamp(36px,5vw,60px)] leading-[1.04] font-extrabold tracking-[-.04em]">Le disque suit chaque morceau.</h2>
        <p className="text-lg leading-[1.55] text-white/75">
          Vinyl ne lit pas la musique à leur place : il affiche et pilote Apple Music et Spotify. Lecture, pause, suivant, aléatoire… tout passe par la platine.
        </p>
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
