import { useCVStore } from "../../store/cvStore";

export default function Step5Skills() {
  const { data, update } = useCVStore();

  return (
    <input
      placeholder="Comma separated skills"
      value={data.skills.join(",")}
      onChange={(e) => update({ skills: e.target.value.split(",") })}
    />
  );
}
