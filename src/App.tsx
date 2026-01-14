import { useCVStore } from "./store/cvStore";
import Stepper from "./components/common/Stepper";
import LivePreview from "./components/preview/LivePreview";

import Step1 from "./components/steps/Step1PersonalInfo";
import Step2 from "./components/steps/Step2Summary";
import Step3 from "./components/steps/Step3Education";
import Step4 from "./components/steps/Step4Experience";
import Step5 from "./components/steps/Step5Skills";
import Step6 from "./components/steps/Step6Template";

export default function App() {
  const step = useCVStore((s) => s.step);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
      <div>
        <Stepper />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {step === 6 && <Step6 />}
      </div>

      <LivePreview />
    </div>
  );
}
