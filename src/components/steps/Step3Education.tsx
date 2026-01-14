import { useCVStore } from "../../store/cvStore";

export default function Step3Education() {
  const { data, update } = useCVStore();

  const add = () => {
    update({
      education: [
        ...data.education,
        { institute: "", degree: "", start: "", end: "", location: "", gpa: "" }
      ]
    });
  };

  return (
    <div className="space-y-4">
      {data.education.map((e, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Institute"
            value={e.institute}
            onChange={(ev) => {
              const ed = [...data.education];
              ed[i].institute = ev.target.value;
              update({ education: ed });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Degree"
            value={e.degree}
            onChange={(ev) => {
              const ed = [...data.education];
              ed[i].degree = ev.target.value;
              update({ education: ed });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Start (e.g. 09/2020)"
            value={e.start ?? ""}
            onChange={(ev) => {
              const ed = [...data.education];
              ed[i].start = ev.target.value;
              update({ education: ed });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="End (e.g. 06/2024)"
            value={e.end ?? ""}
            onChange={(ev) => {
              const ed = [...data.education];
              ed[i].end = ev.target.value;
              update({ education: ed });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Location"
            value={e.location ?? ""}
            onChange={(ev) => {
              const ed = [...data.education];
              ed[i].location = ev.target.value;
              update({ education: ed });
            }}
          />
          <input
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="GPA (optional)"
            value={e.gpa ?? ""}
            onChange={(ev) => {
              const ed = [...data.education];
              ed[i].gpa = ev.target.value;
              update({ education: ed });
            }}
          />
        </div>
      ))}
      <button
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-100 text-gray-900 hover:bg-gray-200"
        onClick={add}
      >
        Add Education
      </button>
    </div>
  );
}
