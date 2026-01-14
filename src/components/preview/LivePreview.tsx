import { useCVStore } from "../../store/cvStore";
import ModernTemplate from "../templates/ModernTemplate";

export default function LivePreview() {
  const { data } = useCVStore();

  return (
    <div className="prose max-w-none">
      <ModernTemplate data={data} />
    </div>
  );
}
