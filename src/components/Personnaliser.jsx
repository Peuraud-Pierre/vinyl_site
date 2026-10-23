import { textures } from '../data.js'

// Personnaliser : le choix de texture habille le vinyle qui suit la page
export default function Personnaliser({ texture, onChange }) {
  const current = textures.find((t) => t.id === texture)

  return (
    <section id="personnaliser" data-stop="2" className="flex min-h-[90vh] scroll-mt-20 items-center py-20">
      <div className="glass flex min-w-0 flex-[0_1_640px] flex-col gap-5 rounded-[40px] p-[clamp(28px,5vw,56px)] max-[560px]:px-[22px] max-[560px]:py-7">
        <span className="text-[15px] font-semibold text-eyebrow">Personnaliser</span>
        <h2 className="text-[clamp(32px,4.4vw,52px)] leading-[1.05] font-extrabold tracking-[-.04em]">Habillez le disque.</h2>
        <div
          role="group"
          aria-label="Texture du disque"
          className="flex flex-wrap gap-1 self-start rounded-[26px] border border-white/14 bg-black/35 p-[5px] max-[560px]:self-stretch"
        >
          {textures.map((t) => {
            const on = t.id === texture
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={on}
                onClick={() => onChange(t.id)}
                className={`min-h-11 cursor-pointer rounded-full border-0 px-5 py-3 text-[15px] font-semibold whitespace-nowrap transition-all duration-250 max-[560px]:flex-auto max-[560px]:px-3 max-[560px]:py-2.5 max-[560px]:text-sm ${
                  on
                    ? 'bg-white/95 text-on-white shadow-[inset_0_1px_0_#fff,0_6px_20px_rgba(0,0,0,.35)]'
                    : 'bg-transparent text-white/85'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>
        <p aria-live="polite" className="min-h-14 text-lg leading-[1.55] text-white/82">{current.text}</p>
        <p className="text-[15px] leading-[1.55] text-white/65">
          Choisissez aussi la couleur du thème et le craquement de l’aiguille. Sur Mac, le petit égaliseur posé sur le socle suit le vrai son.
        </p>
      </div>
    </section>
  )
}
