import { useCVStore } from "../../store/cvStore";

export default function Step5Skills() {
  const { data, update } = useCVStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Skills (comma separated)</label>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="JavaScript, React, Tailwind, Node.js"
          value={data.skills.join(",")}
          onChange={(e) => update({ skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Certifications (comma separated)</label>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="AWS CCP, Scrum Master, Google Analytics"
          value={(data.certifications ?? []).join(",")}
          onChange={(e) => update({ certifications: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
        />
      </div>
    </div>
  );
}
