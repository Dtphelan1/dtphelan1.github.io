export default function ConferenceSection({ conferences }) {
  return (
    <section
      className="basis-full xl:basis-3/4 print:basis-3/4"
      id="Conferences"
    >
      <h2 className="text-xl font-bold inline mr-2">Conferences</h2>
      <hr className="w-full border-primary pb-4" />
      {conferences.map((conference) => {
        return (
          <article
            id={conference.name}
            className="mb-4 last-of-type:mb-4"
            key={conference.name}
          >
            <div className="w-full justify-start">
              <h3 className="pr-2 text-base font-bold">{conference.name}</h3>
              <div className="flex justify-between">
                <p className="text-sm basis-1/2">{conference.role}</p>
                <p className="text-sm basis-1/2 text-right">
                  {conference.period}
                </p>
              </div>
              <p>
                {conference.notes &&
                  conference.notes.map((note, i) => (
                    <span
                      key={[conference.name, conference.period, note].join("-")}
                      className="text-sm italic"
                    >
                      {note}
                      {i === conference.notes.length - 1 ? "" : "; "}
                    </span>
                  ))}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
