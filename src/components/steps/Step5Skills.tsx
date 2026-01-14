import { useCVStore } from "../../store/cvStore";

export default function Step5Skills() {
  const { data, update } = useCVStore();

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">Skills</label>
      <input
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Comma separated skills"
        value={data.skills.join(",")}
        onChange={(e) => update({ skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
      />
    </div>
  );
}
