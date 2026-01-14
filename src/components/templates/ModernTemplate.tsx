export default function ModernTemplate({ data }: any) {
  return (
    <div>
      <h2>{data.personal.name}</h2>
      <hr />
      <p>{data.summary}</p>
    </div>
  );
}
