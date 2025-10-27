import React, { useState } from 'react';

export default function QueryRunner({ disabled }) {
  const [query, setQuery] = useState('What are the most common customer issues?');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');

  async function handleRun() {
    setLoading(true);
    setAnswer('');
    try {
      // Backend-first rule: this UI does not call a non-existent API.
      // Replace this simulated delay with a real fetch once the endpoint exists.
      await new Promise((r) => setTimeout(r, 900));
      setAnswer(
        'Example insight: Top topics include shipping delays (32%), refund requests (21%), and account access (14%). Sentiment skewed slightly negative on weekdays.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">2. Ask a question</h2>
        <p className="mt-1 text-sm text-gray-500">Run natural language queries against your chat dataset.</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your question"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleRun}
            disabled={disabled || loading}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Running…' : 'Run'}
          </button>
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-medium text-gray-700">Answer</h3>
          <div className="mt-2 min-h-[88px] rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
            {answer || 'Your results will appear here.'}
          </div>
        </div>
      </div>
    </section>
  );
}
