export default function ATSTemplate({ data }: any) {
  return (
    <article className="font-sans space-y-6">
      <section className="space-y-1">
        <p className="font-bold text-gray-900">{data.personal.name}</p>
        {data.personal.title && <p className="text-gray-700">{data.personal.title}</p>}
      </section>

      {data.summary && (
        <section className="space-y-1">
          <p className="font-semibold text-gray-900">Summary</p>
          <p className="text-gray-800">{data.summary}</p>
        </section>
      )}

      {data.experience?.length > 0 && (
        <section className="space-y-1">
          <p className="font-semibold text-gray-900">Experience</p>
          <ul className="list-disc ml-5 text-gray-800">
            {data.experience.map((ex: any, i: number) => (
              <li key={i}>
                {ex.role} - {ex.company} ({ex.period})
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.education?.length > 0 && (
        <section className="space-y-1">
          <p className="font-semibold text-gray-900">Education</p>
          <ul className="list-disc ml-5 text-gray-800">
            {data.education.map((ed: any, i: number) => (
              <li key={i}>
                {ed.degree} - {ed.institute} ({ed.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.skills?.length > 0 && (
        <section className="space-y-1">
          <p className="font-semibold text-gray-900">Skills</p>
          <p className="text-gray-800">{data.skills.join(', ')}</p>
        </section>
      )}
    </article>
  );
}
