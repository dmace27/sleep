import SleepCalculator from "@/components/SleepCalculator";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-blue-900">
          Sleep Cycle Calculator
        </h1>
        <div className="h-1 w-16 rounded bg-blue-200" />
      </header>


      <SleepCalculator />
    </div>
  );
}
