import { useCVStore } from "../../store/cvStore";

export default function Step6Template() {
  const { data, update, toggleATS } = useCVStore();

  return (
    <>
      <select
        value={data.template}
        onChange={(e) => update({ template: e.target.value as any })}
      >
        <option value="classic">Classic</option>
        <option value="modern">Modern</option>
      </select>

      <button onClick={toggleATS}>
        ATS Mode: {data.atsMode ? "ON" : "OFF"}
      </button>
    </>
  );
}
