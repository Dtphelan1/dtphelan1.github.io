export default function Project({ project }) {
  function projectMetadata(project) {
    return (
      <i>
        {project.role && <span>{project.role}</span>}
        {project.date && <span>, {project.date}</span>}
      </i>
    );
  }
  return (
    <article id={project.title} className="mb-4 last-of-type:mb-4">
      <header>
        <div className="w-full flex flex-row flex-wrap justify-start">
          <div className="flex justify-between md:justify-start basis-full md:basis-1/2 text-base font-bold">
            <h3 className="pr-2">{project.title}</h3>
            {/* Links */}
            <div className="flex flex-row ">
              {project.links.map((link) => (
                <a
                  target="__blank"
                  href={link.url}
                  key={link.url}
                  title={link.title}
                  className="m-1 text-base font-bold animate__animated hover:animate__pulse"
                >
                  <link.Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <p className="basis-full md:basis-1/2 text-base text-left md:text-right">
            {projectMetadata(project)}
          </p>
        </div>
        {/* Tags */}
        <div className="w-full flex flex-col-reverse items-start md:flex-row md:flex-wrap md:justify-between md:items-center">
          <p className="basis-full md:basis-1/2 text-base italic flex-1 pr-2">
            {project.elevatorPitch}
          </p>
          <div className="basis-full md:basis-1/2 flex flex-1 flex-row flex-wrap items-center justify-start md:justify-end">
            {project.featuredTags.map((tag) => {
              return (
                <p
                  id={tag}
                  key={tag}
                  className="inline px-2 py-1 mx-1 my-1 max-h-6 first-of-type:ml-0 rounded bg-primary-ultra-light text-primary text-xs "
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </header>
      {/* Bullets */}
      <ul className="list-inside list-disc text-sm">
        {project.bullets?.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
