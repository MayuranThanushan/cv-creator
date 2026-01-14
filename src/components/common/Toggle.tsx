import { useCVStore } from "../../store/cvStore";

export default function ATSToggle() {
  const toggleATS = useCVStore((s) => s.toggleATS);

  return (
    <button onClick={toggleATS}>
      Toggle ATS Mode
    </button>
  );
}
