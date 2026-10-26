
export default function SectionHeading({ title }) {
  return (
    <div className="mb-8 flex w-full items-center gap-4">
      {/* Bullet and title */}
      <div className="flex shrink-0 items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-neutral-900 shadow-[0_0_8px_rgba(0,0,0,0.35)]" />

        <h2 className="text-lg font-bold tracking-tight text-neutral-900">
          {title}
        </h2>
      </div>

      {/* Dashed line with a smooth fade-out */}
      <div
        aria-hidden="true"
        className="h-px min-w-0 flex-1 border-t border-dashed border-neutral-400"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, black 10%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 10%, transparent 100%)",
        }}
      />
    </div>
  );
}
