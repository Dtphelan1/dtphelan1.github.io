import CommonResumeFormat from "../../components/CommonResumeFormat";
import { projects, PROJECTTYPES } from "../../data/projects";

export default function Resume() {
  const featuredPython = ["sjp", "rcv", "gerrymandering-mcmc"];

  const workProjects = projects
    .filter((proj) => featuredPython.indexOf(proj.id) >= 0)
    .filter((proj) => proj.type === PROJECTTYPES["work"]);
  const personalProjects = projects
    .filter((proj) => featuredPython.indexOf(proj.id) >= 0)
    .filter((proj) => proj.type === PROJECTTYPES["personal"]);

  return (
    <CommonResumeFormat
      workProjects={workProjects}
      personalProjects={personalProjects}
      highlightSection={"Python"}
    />
  );
}
