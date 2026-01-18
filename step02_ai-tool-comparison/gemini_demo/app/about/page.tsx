export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          自己紹介
        </h1>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            こんにちは、佐藤花子です。
          </p>
          <p>
            趣味は映画鑑賞とカフェ巡りです。
          </p>
          <p>
            特に好きな食べ物はパスタです！
          </p>
        </div>
      </div>
    </div>
  );
}
