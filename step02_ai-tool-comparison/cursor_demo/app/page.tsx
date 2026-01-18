export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900">
      <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center px-6 py-16 sm:px-10">
        <section className="w-full rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-xl backdrop-blur sm:p-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Profile
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            佐藤 花子
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            映画の余韻に浸る時間と、街角のカフェで過ごすひとときが好きです。
            おいしいパスタに出会えると、思わず笑顔になります。
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-zinc-50 p-6">
              <h2 className="text-sm font-semibold text-zinc-500">趣味</h2>
              <ul className="mt-3 space-y-2 text-lg text-zinc-800">
                <li>映画鑑賞</li>
                <li>カフェ巡り</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-6">
              <h2 className="text-sm font-semibold text-zinc-500">
                好きな食べ物
              </h2>
              <p className="mt-3 text-lg text-zinc-800">パスタ</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
              Cinema lover
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
              Cafe explorer
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
              Pasta fan
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
