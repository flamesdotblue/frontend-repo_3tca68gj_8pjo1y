import React from 'react';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center font-bold">NLP</div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Chat Data NLP Studio</h1>
            <p className="text-sm text-gray-500">Upload chat logs, ask questions, and explore insights</p>
          </div>
        </div>
        <a
          href="https://github.com/Kartik9112004/Chat-Data-NLP-Project"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-700 hover:text-indigo-900 font-medium"
        >
          View Repo
        </a>
      </div>
    </header>
  );
}
