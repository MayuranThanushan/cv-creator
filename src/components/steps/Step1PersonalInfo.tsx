import { useCVStore } from "../../store/cvStore";

export default function Step1PersonalInfo() {
  const { data, update } = useCVStore();

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your full name"
          value={data.personal.name}
          onChange={(e) => update({ personal: { ...data.personal, name: e.target.value } })}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g. Frontend Developer"
          value={data.personal.title}
          onChange={(e) => update({ personal: { ...data.personal, title: e.target.value } })}
        />
      </div>

      <div className="space-y-1 md:col-span-2">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="you@example.com"
          value={data.personal.email}
          onChange={(e) => update({ personal: { ...data.personal, email: e.target.value } })}
        />
      </div>
    </form>
  );
}
