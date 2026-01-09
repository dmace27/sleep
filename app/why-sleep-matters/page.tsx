// app/why-sleep-matters/page.tsx

export default function WhySleepMattersPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-blue-900">
          Why Sleep Matters
        </h1>
        <div className="h-1 w-16 rounded bg-blue-200" />
        <p className="text-slate-700 leading-relaxed">
          Sleep isn’t just about feeling rested. For teenagers, it plays a direct
          role in how the brain functions, how information is learned, and how
          the body stays regulated throughout the day. Understanding how sleep
          works makes it easier to see why many students struggle to get enough
          of it.
        </p>
      </header>

      <div className="mt-8 space-y-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-900">
            How the Teen Sleep Cycle Works
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Teenagers experience a natural shift in their internal clock, known
            as the <span className="font-medium">circadian rhythm</span>. During
            adolescence, this rhythm moves later, making it harder to feel tired
            early at night and easier to stay awake past midnight.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This biological shift often conflicts with school schedules and busy
            evenings filled with homework, extracurriculars, and screen time.
            Even when students want to sleep earlier, their bodies may not be
            ready yet.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-900">
            What Happens During Sleep
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Sleep occurs in repeating cycles that last about{" "}
            <span className="font-medium">90 minutes</span>. Each cycle includes
            different stages, including{" "}
            <span className="font-medium">REM sleep</span>.
          </p>
          <p className="text-slate-700 leading-relaxed">
            REM sleep is especially important because it supports:
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Memory formation</li>
            <li>Learning and problem-solving</li>
            <li>Emotional regulation</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            The later part of the night contains longer and more frequent REM
            stages. Cutting sleep short often reduces REM sleep, even if total
            sleep time doesn’t seem drastically low.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-900">
            Why Waking Up at the Right Time Matters
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Waking up in the middle of a sleep cycle can make someone feel
            groggy and disoriented, even after several hours of sleep. Waking
            closer to the end of a cycle tends to feel easier and more alert.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This is why timing matters just as much as total sleep length.
            Planning sleep around natural cycles can improve how rested someone
            feels without changing their entire schedule.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-900">
            Why Teen Sleep Is Often Compromised
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Teen sleep deprivation is rarely caused by a single factor. Common
            contributors include:
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Heavy academic workloads</li>
            <li>Extracurricular commitments</li>
            <li>Poor time management</li>
            <li>Late-night screen use</li>
            <li>Early school start times</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            These pressures make it difficult for students to align their sleep
            schedules with how their bodies naturally function. Addressing sleep
            requires both personal awareness and realistic expectations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-900">
            Using Sleep More Effectively
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Better sleep doesn’t always mean sleeping longer. It can also mean:
          </p>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Going to bed at a time that allows for full sleep cycles</li>
            <li>Waking up at a consistent time</li>
            <li>Understanding how long it takes to fall asleep</li>
            <li>Prioritizing sleep alongside other responsibilities</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Small adjustments can make a noticeable difference in focus, energy,
            and mood.
          </p>
        </section>
      </div>
    </article>
  );
}
