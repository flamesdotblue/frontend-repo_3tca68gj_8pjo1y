import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 w-full border-t border-gray-200 bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          Built for end-to-end chat data analysis. Connect a backend to enable uploads, storage, and NLP.
        </div>
        <div className="text-gray-400">© {new Date().getFullYear()} Chat Data NLP Project</div>
      </div>
    </footer>
  );
}
