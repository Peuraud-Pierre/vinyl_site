// Mini-lecteur en verre, toujours visible en bas
export default function MiniPlayer({ track, color, progress, playing, onToggle }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-10 flex justify-center px-4">
      <div className="glass pointer-events-auto flex h-[76px] w-full max-w-[520px] items-center gap-3 rounded-[26px] px-3 py-2.5">
        <div
          aria-hidden="true"
          className={`grooves-fine flex size-[54px] flex-none items-center justify-center rounded-full animate-vspin motion-reduce:animate-none ${playing ? '' : '[animation-play-state:paused]'}`}
        >
          <div
            className="size-5 rounded-full shadow-[0_0_0_2px_#0e0e10] transition-[background-color] duration-800 motion-reduce:transition-none"
            style={{ backgroundColor: color }}
          />
        </div>
        <div className="flex min-w-0 flex-auto flex-col gap-1.5">
          <div className="flex min-w-0 flex-col gap-px">
            <span className="truncate text-[15px] font-semibold">{track.title}</span>
            <span className="truncate text-xs text-white/72">{track.artist}</span>
          </div>
          <div aria-hidden="true" className="h-[3px] overflow-hidden rounded-[3px] bg-white/20">
            <div className="h-full rounded-[3px] bg-white" style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-label={playing ? 'Pause' : 'Lecture'}
          className="flex size-11 flex-none cursor-pointer items-center justify-center rounded-full border-0 bg-white text-on-white"
        >
          {playing ? (
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>
      </div>
    </div>
  )
}
