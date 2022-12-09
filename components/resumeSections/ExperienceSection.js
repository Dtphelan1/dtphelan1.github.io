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
              {/* Small-&-below screen options - company and roles on one line; title below */}
              <div className="flex sm:hidden w-full flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <h3 className="text-base font-bold mr-2 basis-1/12">
                    {job.title}
                  </h3>
                  <p className="text-sm text-right basis-11/12 ">
                    {jobMetadata(job)}
                  </p>
                </div>
                <p className="text-base italic">{job.elevatorPitch}</p>
              </div>
              {/* All other screen options - company and title on one column; roles on next column */}
              <div className="hidden sm:flex w-full flex-row justify-between">
                <div className="flex flex-col basis-5/12">
                  <h3 className="text-base font-bold mr-2">{job.title}</h3>
                  <p className="text-base italic">{job.elevatorPitch}</p>
                </div>
                <p className="text-base text-right basis-7/12 ">
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
