// Halos de fond
export default function Halos() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-30 size-[620px] rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_68%)] opacity-70 blur-[40px] animate-float motion-reduce:animate-none" />
      <div className="absolute top-[700px] -right-55 size-[720px] rounded-full bg-[radial-gradient(circle,var(--color-ember),transparent_66%)] opacity-45 blur-[50px] animate-float2 motion-reduce:animate-none" />
      <div className="absolute top-[1900px] -left-55 size-[680px] rounded-full bg-[radial-gradient(circle,var(--color-sky),transparent_66%)] opacity-40 blur-[50px] animate-float motion-reduce:animate-none" />
      <div className="absolute top-[3000px] -right-40 size-[640px] rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_66%)] opacity-50 blur-[50px] animate-float2 motion-reduce:animate-none" />
    </div>
  )
}
