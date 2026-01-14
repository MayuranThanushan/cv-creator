import { useCVStore } from "../../store/cvStore";

export default function ATSToggle() {
  const { toggleATS } = useCVStore();

  return (
    <button
      className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-100 text-gray-900 hover:bg-gray-200"
      onClick={toggleATS}
    >
      Toggle ATS Mode
    </button>
  );
}
