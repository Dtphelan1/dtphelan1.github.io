import CommonResumeFormat from "../../components/CommonResumeFormat";
import { projects, PROJECTTYPES } from "../../data/projects";

export default function Resume() {
  const featuredVue = ["sjp", "ssnmip", "icatt"];

  const workProjects = projects
    .filter((proj) => featuredVue.indexOf(proj.id) >= 0)
    .filter((proj) => proj.type === PROJECTTYPES["work"]);
  const personalProjects = projects
    .filter((proj) => featuredVue.indexOf(proj.id) >= 0)
    .filter((proj) => proj.type === PROJECTTYPES["personal"]);

  return (
    <CommonResumeFormat
      workProjects={workProjects}
      personalProjects={personalProjects}
      highlightSection={"Vue"}
    />
  );
}
