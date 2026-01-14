import { useCVStore } from "../../store/cvStore";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import ATSTemplate from "../templates/ATSTemplate";

export default function LivePreview() {
  const { data } = useCVStore();

  if (data.atsMode) return <ATSTemplate data={data} />;
  return data.template === "classic"
    ? <ClassicTemplate data={data} />
    : <ModernTemplate data={data} />;
}
