/** Full-bleed section with home-page rhythm: white ↔ surface-muted. */
export function ContentSection({
  children,
  muted = false,
  tight = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
  tight?: boolean;
}) {
  return (
    <section className={muted ? "bg-surface-muted" : "bg-white"}>
      <div
        className={
          tight
            ? "mx-auto max-w-[720px] px-5 py-10 md:px-8 md:py-12"
            : "mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20"
        }
      >
        {children}
      </div>
    </section>
  );
}
