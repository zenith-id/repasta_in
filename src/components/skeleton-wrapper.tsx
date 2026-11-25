export function SectionSkeleton({ height = 480 }: { height?: number }) {
  return (
    <div
      className="animate-pulse bg-muted/50 flex items-center justify-center"
      style={{ height }}
      aria-hidden="true"
    >
      <div className="w-full max-w-4xl px-4 space-y-4">
        <div className="h-8 w-3/4 mx-auto rounded-md bg-muted" />
        <div className="h-4 w-1/2 mx-auto rounded-md bg-muted" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="h-28 rounded-2xl bg-muted" />
          <div className="h-28 rounded-2xl bg-muted" />
          <div className="h-28 rounded-2xl bg-muted" />
        </div>
      </div>
    </div>
  );
}
