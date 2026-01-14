import { useCVStore } from "../../store/cvStore";

export default function Step2Summary() {
  const { data, update } = useCVStore();

  return (
    <textarea
      placeholder="Professional Summary"
      value={data.summary}
      onChange={(e) => update({ summary: e.target.value })}
    />
  );
}
