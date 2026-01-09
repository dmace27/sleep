import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Sleep Cycle Calculator",
  description:
    "A simple sleep cycle calculator + explainer about teen sleep and REM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-blue-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-slate-900">
              Sleep Cycle Calculator
            </Link>

            <nav className="flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-600 hover:text-blue-900">
                Home
              </Link>
              <Link
                href="/why-sleep-matters"
                className="text-slate-600 hover:text-blue-900"
              >
                Why Sleep Matters
              </Link>
              <a
                href="https://github.com/dmace27/sleep/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-900"
              >
                GitHub
              </a>
            </nav>

          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-4 py-10">{children}</div>
        </main>

      </body>
    </html>
  );
}
