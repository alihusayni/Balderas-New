import type { Metadata } from "next";

const SAMPLE_LONG =
  "Balderas Demolition Inc. — The quick brown fox jumps over the lazy dog.0123456789";

export const metadata: Metadata = {
  title: "Font test — Maison Neue",
  robots: { index: false, follow: false },
};

export default function FontsTestPage() {
  return (
    <main className="mx-auto max-w-[960px] space-y-12 px-6 py-16 text-neutral-950">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Maison Neue load test
        </h1>
        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-neutral-600">
          Maison is bundled from{" "}
          <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs">
            public/fonts/maison/*.ttf
          </code>{" "}
          via{" "}
          <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs">
            next/font/local
          </code>{" "}
          and exposed as CSS variable{" "}
          <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs">
            --font-maison
          </code>{" "}
          on <code className="text-xs">&lt;html&gt;</code>. Class{" "}
          <code className="text-xs">font-maison</code> uses it. If both blocks
          look too similar below, Maison may still be falling back—check DevTools →
          Computed → font-family on each column.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="border-b border-neutral-100 pb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Maison Neue (.font-maison + next/font/local)
          </h2>
          <div className="font-maison mt-6 space-y-5 text-neutral-900">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
                Light 300 · Italic 300
              </p>
              <p className="mt-1 text-lg font-light">{SAMPLE_LONG}</p>
              <p className="mt-2 text-lg font-light italic">{SAMPLE_LONG}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
                Book / Regular 400
              </p>
              <p className="mt-1 text-lg font-normal">{SAMPLE_LONG}</p>
              <p className="mt-2 text-lg italic">{SAMPLE_LONG}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
                Medium 500 · Semibold / Demi 600 · Bold 700
              </p>
              <p className="mt-1 text-lg font-medium">{SAMPLE_LONG}</p>
              <p className="mt-1 text-lg font-semibold">{SAMPLE_LONG}</p>
              <p className="mt-1 text-lg font-bold">{SAMPLE_LONG}</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="border-b border-neutral-100 pb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Comparison — Georgia serif (never Maison)
          </h2>
          <div
            className="mt-6 space-y-5 text-neutral-900"
            style={{
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
            }}
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
                Same weights (Tailwind) — visually distinct serifs
              </p>
              <p className="mt-1 text-lg font-light">{SAMPLE_LONG}</p>
              <p className="mt-2 text-lg italic opacity-95">{SAMPLE_LONG}</p>
              <p className="mt-2 text-lg font-normal">{SAMPLE_LONG}</p>
              <p className="mt-2 text-lg font-medium">{SAMPLE_LONG}</p>
              <p className="mt-2 text-lg font-semibold">{SAMPLE_LONG}</p>
              <p className="mt-2 text-lg font-bold">{SAMPLE_LONG}</p>
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Geist Sans ( Tailwind sans default in many components )
        </h2>
        <p className="mt-4 font-sans text-lg text-neutral-800">
          {SAMPLE_LONG} — This uses <code className="text-sm">font-sans</code> /
          Geist variables from the layout. Maison columns should look clearly
          different from this neo-grotesque sans if files load.
        </p>
      </section>
    </main>
  );
}
