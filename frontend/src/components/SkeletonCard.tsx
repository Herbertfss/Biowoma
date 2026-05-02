export function SkeletonCard() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-3xl bg-white p-6 shadow-soft"
          aria-hidden="true"
        >
          <div className="h-4 w-3/4 rounded-full bg-slate-200" />
          <div className="mt-4 space-y-3">
            <div className="h-4 w-full rounded-full bg-slate-200" />
            <div className="h-4 w-5/6 rounded-full bg-slate-200" />
            <div className="h-10 rounded-2xl bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
