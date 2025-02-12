export default function UpTrend() {
  return (
    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
      <svg
        className="w-8 h-8 text-pink-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    </div>
  );
}
