export default function ClassicTemplate({ data }: any) {
  return (
    <div>
      <h1>{data.personal.name}</h1>
      <h3>{data.personal.title}</h3>
      <p>{data.summary}</p>
    </div>
  );
}
