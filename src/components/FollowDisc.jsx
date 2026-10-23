// Le vinyle qui suit la page (décoratif, derrière le verre)
export default function FollowDisc({ stop, rotation, playing }) {
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
        </div>
      </div>
    </div>
  )
}
