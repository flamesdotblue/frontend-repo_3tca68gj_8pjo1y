import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[520px] w-full rounded-3xl border border-gray-200 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 shadow-xl sm:h-[640px]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft glow accents that do not block interaction */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900/60" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Conversational Intelligence, Reimagined
            </h1>
            <p className="mt-3 text-sm text-slate-200 sm:mt-4 sm:text-base">
              Upload chat logs, run natural‑language queries, and unlock insights with a modern NLP pipeline.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#workflow"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:translate-y-[-1px] hover:bg-indigo-500 active:translate-y-[0px] sm:px-5 sm:py-2.5"
              >
                Get Started
              </a>
              <a
                href="https://github.com/Kartik9112004/Chat-Data-NLP-Project"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 sm:px-5 sm:py-2.5"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
