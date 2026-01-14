import { useCVStore } from "../../store/cvStore";

export default function Step6Template() {
  const { data, update, toggleATS } = useCVStore();

  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Template</label>
        <select
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          value={data.template}
          onChange={(e) => update({ template: e.target.value as any })}
        >
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
        </select>
      </div>

      <button className="btn btn-secondary" onClick={toggleATS}>
        ATS Mode: {data.atsMode ? "ON" : "OFF"}
      </button>
    </div>
  );
}
