import React, { useRef, useState } from 'react';

export default function ChatUpload({ onFileSelected }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [note, setNote] = useState('');

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setNote('');
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result?.toString() || '';
      setNote(`Loaded ${text.length.toLocaleString()} characters`);
    };
    reader.readAsText(file);
    onFileSelected?.(file);
  }

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">1. Upload chat data</h2>
        <p className="mt-1 text-sm text-gray-500">
          Add a CSV or TXT file with chat logs. The backend will parse, store, and index it for NLP tasks.
        </p>

        <div className="mt-5">
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8">
            <button
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 active:scale-[0.99]"
            >
              Choose file
            </button>
            <input
              ref={inputRef}
              type="file"
              accept=".csv,.txt"
              onChange={handleFileChange}
              className="hidden"
            />
            {fileName ? (
              <div className="text-sm text-gray-700">Selected: <span className="font-medium">{fileName}</span></div>
            ) : (
              <div className="text-sm text-gray-500">No file selected</div>
            )}
            {note && <div className="text-xs text-gray-500">{note}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
