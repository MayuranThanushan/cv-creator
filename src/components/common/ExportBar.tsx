import { exportPDF } from "../../export/exportPDF";
import { exportDOCX } from "../../export/exportDOCX";
import { useCVStore } from "../../store/cvStore";

export default function ExportBar() {
  const { data } = useCVStore();

  return (
    <div className="flex items-center gap-2">
      <button
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
        onClick={() => exportPDF(data)}
      >
        Download PDF
      </button>
      <button
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 shadow-sm"
        onClick={() => exportDOCX(data)}
      >
        Download DOCX
      </button>
    </div>
  );
}
