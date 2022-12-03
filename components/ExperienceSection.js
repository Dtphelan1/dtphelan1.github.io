export default function ExperienceSection({ jobs }) {
  function jobMetadata(job) {
    return (
      <i>
        {job.roleList &&
          job.roleList.map((role) => (
            <span key={role.title} className="block">
              {role.title}, {role.date}
            </span>
          ))}
      </i>
    );
  }

  return (
    <>
      <h2 className="text-xl font-bold ">Experience</h2>
      <hr className="w-full border-primary pb-4" />
      {jobs.map((job) => {
        return (
          <article
            id={job.title}
            className="mb-4 last-of-type:mb-4"
            key={job.title}
          >
            <header>
              <div className="w-full flex flex-row items-start justify-between">
                <div className="flex flex-col flex-1">
                  <h3 className="text-base font-bold mr-2">{job.title}</h3>
                  <p className="text-base italic">{job.elevatorPitch}</p>
                </div>
                <p className="text-base text-right flex-1 ">
                  {jobMetadata(job)}
                </p>
              </div>
            </header>
            {/* Bullets */}
            <ul className="list-inside list-disc text-sm">
              {job.bullets?.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </>
  );
}
