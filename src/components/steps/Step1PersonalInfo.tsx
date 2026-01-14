import { useCVStore } from "../../store/cvStore";

export default function Step1PersonalInfo() {
  const { data, update } = useCVStore();

  return (
    <>
      <input placeholder="Name" value={data.personal.name}
        onChange={(e) => update({ personal: { ...data.personal, name: e.target.value } })} />
      <input placeholder="Title" value={data.personal.title}
        onChange={(e) => update({ personal: { ...data.personal, title: e.target.value } })} />
      <input placeholder="Email" value={data.personal.email}
        onChange={(e) => update({ personal: { ...data.personal, email: e.target.value } })} />
    </>
  );
}
