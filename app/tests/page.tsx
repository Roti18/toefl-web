"use client";

import { useEffect, useState } from "react";
import { fetchFromApi } from "@/lib/api";

type Question = {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct_answer: string;
};

export default function TestPage() {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFromApi("structure");
        setQuestion(data);
      } catch (error) {
        console.error("Failed to fetch question", error);
      }
    }

    fetchData();
  }, []);

  if (!question) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="p-6 max-w-6xl py-10 w-full bg-neutral-900 text-white shadow-lg rounded-lg border border-neutral-700">
        <h1 className="text-2xl font-semibold mb-4">Structure Question</h1>
        <p className="mb-6 text-neutral-200">{question.question}</p>
        <ul className="space-y-3">
          {Object.entries(question.options).map(([key, value]) => (
            <li
              key={key}
              className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <span className="font-bold text-white">{key}.</span>{" "}
              <span className="text-neutral-300">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
