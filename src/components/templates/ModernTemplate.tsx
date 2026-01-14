export default function ModernTemplate({ data }: any) {
  return (
    <article className="space-y-6">
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{data.personal.name}</h2>
          <span className="text-sm text-gray-500">{data.personal.title}</span>
        </div>
        <div className="h-px bg-gray-200" />
        {data.summary && <p className="text-gray-700 leading-relaxed">{data.summary}</p>}
      </section>

      {data.experience?.length > 0 && (
        <section className="space-y-2">
          <h4 className="text-xs uppercase tracking-wide text-gray-500">Professional Experience</h4>
          <div className="space-y-4">
            {data.experience.map((ex: any, i: number) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{ex.role}</p>
                  <span className="text-sm text-gray-500">{ex.company} • {ex.period}</span>
                </div>
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

      {data.education?.length > 0 && (
        <section className="space-y-2">
          <h4 className="text-xs uppercase tracking-wide text-gray-500">Education</h4>
          <ul className="space-y-1">
            {data.education.map((ed: any, i: number) => (
              <li key={i} className="text-gray-700">
                {ed.degree} — {ed.institute} ({ed.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.skills?.length > 0 && (
        <section className="space-y-2">
          <h4 className="text-xs uppercase tracking-wide text-gray-500">Skills</h4>
          <p className="text-gray-700">{data.skills.join(', ')}</p>
        </section>
      )}
    </article>
  );
}
