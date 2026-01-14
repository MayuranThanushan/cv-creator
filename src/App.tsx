import { useCVStore } from "./store/cvStore";
import Stepper from "./components/common/Stepper";
import LivePreview from "./components/preview/LivePreview";
import ExportBar from "./components/common/ExportBar";

import Step1 from "./components/steps/Step1PersonalInfo";
import Step2 from "./components/steps/Step2Summary";
import Step3 from "./components/steps/Step3Education";
import Step4 from "./components/steps/Step4Experience";
import Step5 from "./components/steps/Step5Skills";
// Removed template selection step

export default function App() {
  const step = useCVStore((s) => s.step);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm ring-1 ring-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">CV Creator</h1>
            <span className="text-sm text-gray-500">Build a professional resume</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-4">
          <Stepper />
          <div className="mt-4 space-y-4">
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}
            {/* Step 6 removed; final step is 5 */}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-700">Live Preview</h2>
            <ExportBar />
          </div>
          <LivePreview />
        </div>
      </main>
    </div>
  );
}
