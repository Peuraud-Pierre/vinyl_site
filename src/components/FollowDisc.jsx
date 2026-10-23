import { discBackground } from '../data.js'

// Le vinyle qui suit la page (décoratif, derrière le verre), avec son bras de lecture
export default function FollowDisc({ stop, texture, rotation, playing }) {
  const background = discBackground(texture, stop.color)

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-1">
      <div className="sticky top-0 h-screen max-h-[1100px]">
        <div
          className="absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 transition-[left,width] duration-900 ease-glass max-[760px]:opacity-50 motion-reduce:transition-none"
          style={{ left: `${stop.left}%`, width: `min(${stop.size}vw, 640px)` }}
        >
          <div className="size-full" style={{ transform: `rotate(${rotation}deg)` }}>
            <div
              className={`grooves relative size-full rounded-full shadow-[0_50px_120px_rgba(0,0,0,.75),inset_0_0_0_1px_rgba(255,255,255,.07)] animate-vspin motion-reduce:animate-none ${playing ? '' : '[animation-play-state:paused]'}`}
            >
              {background && (
                <div className="absolute inset-0 rounded-full transition-[background] duration-800" style={{ background }}>
                  <div className="grooves-overlay absolute inset-0 rounded-full" />
                </div>
              )}
              <div className="disc-shine absolute inset-0 rounded-full" />
              <div
                className="absolute top-1/2 left-1/2 size-[36%] -translate-1/2 rounded-full shadow-[0_0_0_3px_#0e0e10,inset_0_0_30px_rgba(0,0,0,.35)] transition-[background-color] duration-800 motion-reduce:transition-none"
                style={{ backgroundColor: stop.color }}
              >
                <span className="absolute top-[18%] left-1/2 -translate-x-1/2 text-[clamp(8px,1vw,13px)] font-extrabold tracking-[.18em] text-white/90">
                  VINYL
                </span>
                <span className="absolute top-1/2 left-1/2 size-[9%] -translate-1/2 rounded-full bg-night" />
              </div>
            </div>
          </div>

          {/* Bras : posé sur le disque pendant la lecture, relevé à la pause */}
          <svg
            viewBox="0 0 100 200"
            className="absolute top-[-6%] right-[-8%] h-[80%] w-[40%] origin-[88%_5%] drop-shadow-[0_12px_18px_rgba(0,0,0,.6)] transition-transform duration-700 ease-glass motion-reduce:transition-none"
            style={{ transform: `rotate(${playing ? 0 : -22}deg)` }}
          >
            <circle cx="88" cy="10" r="9" fill="#2a2a30" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
            <circle cx="88" cy="10" r="3" fill="#d8d8de" />
            <path d="M88 10 L84 120 L46 168" fill="none" stroke="#d8d8de" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="32" y="162" width="20" height="12" rx="2" transform="rotate(-50 42 168)" fill="#f2f2f5" />
          </svg>
        </div>
      </div>
    </div>
  )
}
