export default function ATSTemplate({ data }: any) {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <strong>{data.personal.name}</strong>
      <p>{data.summary}</p>
    </div>
  );
}
