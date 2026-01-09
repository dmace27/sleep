export type Mode = "wake" | "bed";

export type SleepRecommendation = {
  minutes: number; // minutes since midnight (0..1439)
  displayTime: string; // formatted like "6:45 AM"
  cycles: number; // 3,4,5,6,7...
  sleepMinutes: number; // total minutes asleep (cycles*90)
};

const CYCLE_MIN = 90;
const FALL_ASLEEP_MIN = 15;

// Default cycle options (edit this if you want fewer/more)
const DEFAULT_CYCLES = [3, 4, 5, 6, 7];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function parseTimeToMinutes(hhmm: string): number {
  const [hh, mm] = hhmm.split(":").map(Number);
  if (!Number.isFinite(hh) || !Number.isFinite(mm)) return 0;
  return hh * 60 + mm;
}

export function minutesTo12Hour(minutesSinceMidnight: number): string {
  const m = mod(minutesSinceMidnight, 1440);
  const hh24 = Math.floor(m / 60);
  const mm = m % 60;

  const ampm = hh24 >= 12 ? "PM" : "AM";
  const hh12 = hh24 % 12 === 0 ? 12 : hh24 % 12;

  return `${hh12}:${String(mm).padStart(2, "0")} ${ampm}`;
}

export function formatDuration(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}h ${String(m).padStart(2, "0")}m`;
}

export function getRecommendations(
  mode: Mode,
  inputHHMM: string,
  cyclesList: number[] = DEFAULT_CYCLES,
  fallAsleepMinutes: number = FALL_ASLEEP_MIN
): SleepRecommendation[] {
  const inputMin = parseTimeToMinutes(inputHHMM);

  const recs: SleepRecommendation[] = cyclesList.map((cycles) => {
    const sleepMinutes = cycles * CYCLE_MIN;

    // wake mode: compute bedtimes
    // bedtime = wake - sleep - fallAsleep
    // bed mode: compute wake times
    // wake = bed + fallAsleep + sleep
    const outputMin =
      mode === "wake"
        ? inputMin - sleepMinutes - fallAsleepMinutes
        : inputMin + fallAsleepMinutes + sleepMinutes;

    return {
      minutes: mod(outputMin, 1440),
      displayTime: minutesTo12Hour(outputMin),
      cycles,
      sleepMinutes,
    };
  });

  // Keep the display order predictable
  recs.sort((a, b) => a.cycles - b.cycles);

  return recs;
}
