export default function ClassicTemplate({ data }: any) {
  return (
    <article className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">{data.personal.name}</h1>
        <h3 className="text-lg text-gray-600">{data.personal.title}</h3>
        {data.summary && <p className="text-gray-700 leading-relaxed">{data.summary}</p>}
      </section>

      {data.education?.length > 0 && (
        <section className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Education</h4>
          <div className="h-px bg-gray-200" />
          <ul className="space-y-1">
            {data.education.map((ed: any, i: number) => (
              <li key={i} className="text-gray-700">
                {ed.degree} - {ed.institute} ({ed.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.experience?.length > 0 && (
        <section className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Professional Experience</h4>
          <div className="h-px bg-gray-200" />
          <div className="space-y-4">
            {data.experience.map((ex: any, i: number) => (
              <div key={i}>
                <p className="text-gray-800">
                  {ex.role} - {ex.company} ({ex.period})
                </p>
                {ex.points?.length > 0 && (
                  <ul className="list-disc ml-5 text-gray-700">
                    {ex.points.map((p: string, j: number) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills?.length > 0 && (
        <section className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Skills</h4>
          <div className="h-px bg-gray-200" />
          <p className="text-gray-700">{data.skills.join(', ')}</p>
        </section>
      )}
    </article>
  );
}
