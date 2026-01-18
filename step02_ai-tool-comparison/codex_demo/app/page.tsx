import { Playfair_Display, Manrope } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50 to-amber-50">
      <main className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16 sm:px-10">
        <section className="relative w-full overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-10 shadow-[0_25px_60px_-45px_rgba(15,15,15,0.45)] backdrop-blur">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-200/40 blur-2xl" />
          <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="relative flex flex-col gap-8">
            <div className="flex flex-wrap items-end gap-4">
              <span
                className={`${manrope.className} inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-600`}
              >
                Profile
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-black/10 to-transparent" />
            </div>
            <div className="flex flex-col gap-4">
              <h1
                className={`${playfair.className} text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl`}
              >
                佐藤 花子
              </h1>
              <p
                className={`${manrope.className} max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg`}
              >
                心地よい時間を大切にしながら、日々の小さな発見を楽しんでいます。
                映画やカフェの雰囲気からインスピレーションを受けることが多いです。
              </p>
            </div>
            <div className="grid gap-6 rounded-2xl border border-black/5 bg-white/70 p-6 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <p
                  className={`${manrope.className} text-xs uppercase tracking-[0.35em] text-zinc-400`}
                >
                  Hobby
                </p>
                <p className={`${manrope.className} text-lg font-medium text-zinc-800`}>
                  映画鑑賞
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className={`${manrope.className} text-xs uppercase tracking-[0.35em] text-zinc-400`}
                >
                  Favorite Spot
                </p>
                <p className={`${manrope.className} text-lg font-medium text-zinc-800`}>
                  カフェ巡り
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className={`${manrope.className} text-xs uppercase tracking-[0.35em] text-zinc-400`}
                >
                  Food
                </p>
                <p className={`${manrope.className} text-lg font-medium text-zinc-800`}>
                  パスタ
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
