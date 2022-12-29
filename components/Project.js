import Tag from "./Tag";

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
          <div className="flex justify-between print:justify-start sm:justify-start basis-full print:basis-1/2 sm:basis-1/2 text-base font-bold">
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
          <p className="basis-full print:basis-1/2 sm:basis-1/2 text-base text-left print:text-right sm:text-right">
            {projectMetadata(project)}
          </p>
        </div>
        {/* Tags */}
        <div className="w-full flex flex-col-reverse items-start print:flex-row sm:flex-row print:flex-wrap sm:flex-wrap print:justify-between sm:justify-between print:items-center sm:items-center">
          <p className="basis-full print:basis-auto sm:basis-auto text-base italic flex-1 pr-2">
            {project.elevatorPitch}
          </p>
          <div className="basis-full print:basis-auto sm:basis-auto flex flex-1 flex-row flex-wrap items-center justify-start print:justify-end sm:justify-end">
            {project.featuredTags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
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
