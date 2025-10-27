import React from 'react';

function Stat({ label, value, trend }) {
  const trendColor = trend > 0 ? 'text-emerald-600' : trend < 0 ? 'text-rose-600' : 'text-gray-500';
  const trendSign = trend > 0 ? '+' : '';
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className={`mt-1 text-xs ${trendColor}`}>{trendSign}{trend}% vs last week</div>
    </div>
  );
}

export default function InsightsPanel() {
  return (
    <section className="w-full">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">3. Quick insights</h2>
        <p className="mt-1 text-sm text-gray-500">Snapshot metrics based on your parsed conversations.</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Total Conversations" value="12,483" trend={5.2} />
          <Stat label="Avg. Sentiment" value="0.42" trend={1.1} />
          <Stat label="First Response Time" value="2m 31s" trend={-3.4} />
          <Stat label="Escalation Rate" value="8.3%" trend={-0.7} />
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium text-gray-700">Topic distribution (sample)</h3>
          <div className="mt-3 grid grid-cols-12 gap-2 text-xs text-gray-600">
            {[36, 22, 18, 12, 7, 5].map((v, i) => (
              <div key={i} className="col-span-12 flex items-center gap-3">
                <div className="w-32 shrink-0 text-right">Topic {i + 1}</div>
                <div className="h-2 w-full overflow-hidden rounded bg-gray-100">
                  <div className="h-full bg-indigo-600" style={{ width: `${v}%` }} />
                </div>
                <div className="w-10 text-right">{v}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
