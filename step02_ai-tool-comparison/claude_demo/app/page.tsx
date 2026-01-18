export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-5">
      <main className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-2xl">
        {/* Avatar */}
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-5xl text-white">
          H
        </div>

        {/* Name */}
        <h1 className="mb-2 text-3xl font-semibold text-gray-800">
          佐藤 花子
        </h1>
        <p className="mb-8 text-sm text-gray-400">Hanako Sato</p>

        {/* Info Section */}
        <div className="space-y-4 text-left">
          {/* Hobbies */}
          <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
              🎬
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">
                趣味
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-3 py-1 text-sm text-white">
                  映画鑑賞
                </span>
                <span className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-3 py-1 text-sm text-white">
                  カフェ巡り
                </span>
              </div>
            </div>
          </div>

          {/* Favorite Food */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
              🍝
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">
                好きな食べ物
              </p>
              <p className="font-medium text-gray-800">パスタ</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
