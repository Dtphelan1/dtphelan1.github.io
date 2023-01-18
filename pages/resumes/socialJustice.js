import CommonResumeFormat from "../../components/CommonResumeFormat";
import { projects, PROJECTTYPES } from "../../data/projects";

export default function Resume() {
  const featuredSocialJustice = ["ssnmip", "sjp", "rcv"];

  const workProjects = projects
    .filter((proj) => featuredSocialJustice.indexOf(proj.id) >= 0)
    .filter((proj) => proj.type === PROJECTTYPES["work"]);
  const personalProjects = projects
    .filter((proj) => featuredSocialJustice.indexOf(proj.id) >= 0)
    .filter((proj) => proj.type === PROJECTTYPES["personal"]);

  return (
    <CommonResumeFormat
      workProjects={workProjects}
      personalProjects={personalProjects}
      highlightSection={"Social Justice"}
    />
  );
}
