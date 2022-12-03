import Project from "../components/Project";

export default function ProjectSection({ workProjects, personalProjects }) {
  return (
    <>
      <h2 className="text-xl font-bold inline mr-2">Work Projects</h2>
      <hr className="w-full border-primary pb-4" />
      {workProjects.map((project) => {
        return <Project key={project.title} project={project} />;
      })}
      <h2 className="text-xl font-bold inline mr-2">Personal Projects</h2>
      <hr className="w-full border-primary pb-4" />
      {personalProjects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </>
  );
}
