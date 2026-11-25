export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-pulse" aria-hidden="true">
        <div className="h-20 bg-muted/50" />
        <div className="min-h-[95vh] flex items-center justify-center">
          <div className="w-full max-w-4xl px-4 space-y-6 text-center">
            <div className="h-6 w-64 mx-auto rounded-full bg-muted" />
            <div className="h-14 w-3/4 mx-auto rounded-md bg-muted" />
            <div className="h-4 w-1/2 mx-auto rounded-md bg-muted" />
            <div className="flex gap-4 justify-center mt-8">
              <div className="h-14 w-48 rounded-2xl bg-muted" />
              <div className="h-14 w-48 rounded-2xl bg-muted" />
            </div>
            <div className="grid grid-cols-3 gap-px mt-12 rounded-3xl overflow-hidden border border-muted bg-muted">
              <div className="h-24 bg-muted/50" />
              <div className="h-24 bg-muted/50" />
              <div className="h-24 bg-muted/50" />
            </div>
          </div>
        </div>
        <div className="space-y-4 px-4 py-16">
          <div className="h-96 rounded-2xl bg-muted/50" />
          <div className="h-96 rounded-2xl bg-muted/50" />
        </div>
      </div>
    </div>
  );
}
