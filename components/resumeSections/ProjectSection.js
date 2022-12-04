import Project from "../Project";

export default function ProjectSection({ workProjects, personalProjects }) {
  return (
    <>
      {workProjects.length > 0 && (
        <>
          <h2 className="text-xl font-bold inline mr-2">Work Projects</h2>
          <hr className="w-full border-primary pb-4" />
          {workProjects.map((project) => {
            return <Project key={project.title} project={project} />;
          })}
        </>
      )}
      {personalProjects.length > 0 && (
        <>
          <h2 className="text-xl font-bold inline mr-2">Personal Projects</h2>
          <hr className="w-full border-primary pb-4" />
          {personalProjects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </>
      )}
    </>
  );
}
