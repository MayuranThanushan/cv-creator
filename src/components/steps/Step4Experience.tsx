import { useCVStore } from "../../store/cvStore";

export default function Step4Experience() {
  const { data, update } = useCVStore();

  const add = () => {
    update({
      experience: [...data.experience, {
        role: "", company: "", period: "", points: []
      }]
    });
  };

  return (
    <>
      {data.experience.map((e, i) => (
        <input key={i} placeholder="Role"
          value={e.role}
          onChange={(ev) => {
            const ex = [...data.experience];
            ex[i].role = ev.target.value;
            update({ experience: ex });
          }} />
      ))}
      <button onClick={add}>Add Experience</button>
    </>
  );
}
