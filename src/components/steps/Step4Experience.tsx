import { useCVStore } from "../../store/cvStore";

export default function Step4Experience() {
  const { data, update } = useCVStore();

  const add = () => {
    update({
      experience: [
        ...data.experience,
        { role: "", company: "", start: "", end: "", location: "", points: [] }
      ]
    });
  };

  return (
    <div className="space-y-4">
      {data.experience.map((e, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Role"
            value={e.role}
            onChange={(ev) => {
              const ex = [...data.experience];
              ex[i].role = ev.target.value;
              update({ experience: ex });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Company"
            value={e.company}
            onChange={(ev) => {
              const ex = [...data.experience];
              ex[i].company = ev.target.value;
              update({ experience: ex });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Start (e.g. 07/2022)"
            value={e.start ?? ""}
            onChange={(ev) => {
              const ex = [...data.experience];
              ex[i].start = ev.target.value;
              update({ experience: ex });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="End (e.g. Present)"
            value={e.end ?? ""}
            onChange={(ev) => {
              const ex = [...data.experience];
              ex[i].end = ev.target.value;
              update({ experience: ex });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Location"
            value={e.location ?? ""}
            onChange={(ev) => {
              const ex = [...data.experience];
              ex[i].location = ev.target.value;
              update({ experience: ex });
            }}
          />
        </div>
      ))}
      <button
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-100 text-gray-900 hover:bg-gray-200"
        onClick={add}
      >
        Add Experience
      </button>
    </div>
  );
}
