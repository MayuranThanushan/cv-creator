import { useCVStore } from "../../store/cvStore";

export default function Stepper() {
  const { step, next, prev } = useCVStore();

  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={prev} disabled={step === 1}>Back</button>
      <span style={{ margin: "0 10px" }}>Step {step}</span>
      <button onClick={next} disabled={step === 6}>Next</button>
    </div>
  );
}
