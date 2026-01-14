import { useCVStore } from "../../store/cvStore";

export default function Step2Summary() {
  const { data, update } = useCVStore();

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">Professional Summary</label>
      <textarea
        className="min-h-32 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Write a concise summary highlighting your expertise and impact."
        value={data.summary}
        onChange={(e) => update({ summary: e.target.value })}
      />
    </div>
  );
}
