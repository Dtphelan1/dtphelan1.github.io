export default function EducationSection({ education }) {
  return (
    <>
      <h2 className="text-xl font-bold ">Education</h2>
      <hr className="w-full border-primary pb-4" />
      {education.map((edu) => (
        <article key={[edu.degree, edu.school].join("-")} className="mb-4">
          <h3 className="text-base font-bold">
            {edu.degree}, {edu.school}
          </h3>
          <p className="text-sm">{edu.focus}</p>
          <p className="text-sm">
            {edu.period}, {edu.gpa}
          </p>
          {edu.notes &&
            edu.notes.map((note) => (
              <p
                key={[edu.degree, edu.school, note].join("-")}
                className="text-sm italic"
              >
                {note}
              </p>
            ))}
        </article>
      ))}
    </>
  );
}
