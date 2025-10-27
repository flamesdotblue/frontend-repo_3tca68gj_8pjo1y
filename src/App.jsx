import React, { useState } from 'react';
import Header from './components/Header.jsx';
import ChatUpload from './components/ChatUpload.jsx';
import QueryRunner from './components/QueryRunner.jsx';
import InsightsPanel from './components/InsightsPanel.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-gray-900">
      <Header />

      <main className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Analyze your conversations with NLP</h2>
          <p className="mt-2 text-gray-600">
            This interface lets you upload chat logs, run natural language queries, and review insights. Connect it to a
            Flask + SQLAlchemy + PostgreSQL backend to make it fully end-to-end.
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          <ChatUpload onFileSelected={setFile} />
          <QueryRunner disabled={!file} />
          <InsightsPanel />
        </div>
      </main>

      <Footer />
    </div>
  );
}
