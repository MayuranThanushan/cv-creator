import { useCVStore } from "../../store/cvStore";

export default function Stepper() {
  const { step, next, prev } = useCVStore();

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={prev}
        disabled={step === 1}
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:opacity-50"
      >
        Back
      </button>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Step</span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-xs">
          {step}
        </span>
        <span className="text-sm text-gray-400">/ 6</span>
      </div>

      <button
        onClick={next}
        disabled={step === 6}
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
