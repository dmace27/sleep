"use client";

import { useMemo, useState } from "react";
import {
  formatDuration,
  getRecommendations,
  Mode,
  SleepRecommendation,
} from "@/lib/sleep";

export default function SleepCalculator() {
  const [mode, setMode] = useState<Mode>("wake");
  const [time, setTime] = useState<string>("07:00");
  const [results, setResults] = useState<SleepRecommendation[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Optional upgrade: allow user to change fall-asleep buffer
  const [fallAsleep, setFallAsleep] = useState<number>(15);

  const heading = useMemo(() => {
    return mode === "wake" ? "I want to wake up at…" : "I’m going to bed at…";
  }, [mode]);

  const inputLabel = useMemo(() => {
    return mode === "wake" ? "Wake-up time" : "Bedtime";
  }, [mode]);

  function isBest(cycles: number) {
    return cycles === 5 || cycles === 6;
  }

  function setModeAndDefault(next: Mode) {
    setMode(next);
    setResults(null);
    setError(null);
    setTime(next === "wake" ? "07:00" : "23:00");
  }

  function onCalculate() {
    if (!time) {
      setError("Please enter a time.");
      setResults(null);
      return;
    }

    setError(null);

    // Uses default cycles from lib (e.g., [3,4,5,6,7]) and the selected fall-asleep buffer
    setResults(getRecommendations(mode, time, undefined, fallAsleep));
  }

  function onReset() {
    setMode("wake");
    setTime("07:00");
    setResults(null);
    setError(null);
    setFallAsleep(15);
  }

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-6 space-y-6 shadow-md">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-blue-900">{heading}</h2>
        <p className="text-sm text-slate-600">
          Assumes ~90-minute sleep cycles. You can adjust the fall-asleep buffer
          below.
        </p>
      </div>

      {/* Mode toggle */}
      <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setModeAndDefault("wake")}
          className={[
            "px-3 py-2 text-sm rounded-lg transition",
            mode === "wake"
              ? "bg-blue-900 text-white shadow-sm"
              : "text-slate-700 hover:text-blue-900",
          ].join(" ")}
        >
          Wake-up time
        </button>
        <button
          type="button"
          onClick={() => setModeAndDefault("bed")}
          className={[
            "px-3 py-2 text-sm rounded-lg transition",
            mode === "bed"
              ? "bg-blue-900 text-white shadow-sm"
              : "text-slate-700 hover:text-blue-900",
          ].join(" ")}
        >
          Bedtime
        </button>
      </div>

      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            {inputLabel}
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              setResults(null);
              setError(null);
            }}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Time to fall asleep
          </label>
          <select
            value={fallAsleep}
            onChange={(e) => {
              setFallAsleep(Number(e.target.value));
              setResults(null);
              setError(null);
            }}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value={10}>10 minutes</option>
            <option value={15}>15 minutes</option>
            <option value={20}>20 minutes</option>
          </select>
          <p className="text-xs text-slate-600">
            This is an estimate—most people take 10–20 minutes.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onCalculate}
          className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 transition"
        >
          Calculate
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
          Recommendations
        </h3>

        {!results ? (
          <div className="rounded-xl border-l-4 border-blue-300 bg-blue-50 p-4 text-sm text-slate-600">
            Enter a time and click{" "}
            <span className="font-medium text-blue-900">Calculate</span> to see
            recommendations.
          </div>
        ) : (
          <>
            <div className="grid gap-3 sm:grid-cols-2">
              {results.map((r) => {
                const best = isBest(r.cycles);

                return (
                  <div
                    key={`${r.minutes}-${r.cycles}`}
                    className={[
                      "rounded-xl border p-4 transition",
                      best
                        ? "border-blue-300 bg-white shadow-sm"
                        : "border-blue-200 bg-blue-100/60",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold text-blue-900">
                            {r.displayTime}
                          </div>
                          {best && (
                            <span className="rounded-full bg-blue-900 px-2 py-0.5 text-[11px] font-medium text-white">
                              Best
                            </span>
                          )}
                        </div>

                        <div className="text-sm text-slate-600">
                          {formatDuration(r.sleepMinutes)} sleep
                        </div>
                      </div>

                      <span className="rounded-lg bg-blue-900 px-2 py-1 text-xs text-white">
                        {r.cycles} cycles
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-600">
              Tip: 5–6 cycles (~7.5–9 hours) is often a good target. Waking at
              the end of a cycle can feel easier than waking mid-cycle.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
