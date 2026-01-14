import { useCVStore } from "../../store/cvStore";

export default function Step3Education() {
  const { data, update } = useCVStore();

  const add = () => {
    update({
      education: [...data.education, { institute: "", degree: "", year: "" }]
    });
  };

  return (
    <>
      {data.education.map((e, i) => (
        <input key={i} placeholder="Institute"
          value={e.institute}
          onChange={(ev) => {
            const ed = [...data.education];
            ed[i].institute = ev.target.value;
            update({ education: ed });
          }} />
      ))}
      <button onClick={add}>Add Education</button>
    </>
  );
}
