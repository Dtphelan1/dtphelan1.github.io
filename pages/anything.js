import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PageFadeWrapper from "../components/PageFadeWrapper";
import ConferenceSection from "../components/resumeSections/ConferenceSection";
import SkillsSection from "../components/resumeSections/SkillsSection";
import ExperienceSection from "../components/resumeSections/ExperienceSection";
import EducationSection from "../components/resumeSections/EducationSection";
import ProjectSection from "../components/resumeSections/ProjectSection";
import AboutMeSection from "../components/resumeSections/AboutMeSection";
// Data
import education from "../data/education";
import conferences from "../data/conferences";
import jobs from "../data/jobs";
import skills from "../data/skills";
import aboutMe from "../data/aboutMe";
import { projects, PROJECTTYPES } from "../data/projects";

export default function CV() {
  const workProjects = projects.filter(
    (proj) => proj.type === PROJECTTYPES["work"]
  );
  const personalProjects = projects.filter(
    (proj) => proj.type === PROJECTTYPES["personal"]
  );
  // Printing logic
  // Ref of the component to print
  const componentRef = useRef();
  // Date for file-name time stamping
  const today = new Date();
  // Set up printing hook
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${[
      today.getDate(),
      today.getMonth() + 1,
      today.getFullYear(),
    ].join("-")}-Dylan-Phelan-Resume`,
  });

  return (
    <PageFadeWrapper>
      <div className="h-screen md:h-auto md:max-h-[97vh] w-full text-sm">
        <div ref={componentRef} className="relative overflow-clip mx-auto">
          <AboutMeSection aboutMe={aboutMe} handlePrint={handlePrint} />
          <div
            id="content"
            className=" max-w-screen-xl flex flex-wrap-reverse px-4 my-4 print:!mt-0 mx-auto text-primary bg-neutral-main"
          >
            <section className="basis-full xl:basis-1/4 print:basis-1/4 xl:pr-4 print:pr-4 flex flex-col md:flex-row md:flex-wrap xl:flex-col print:!flex-col">
              <div className="pr-0 md:pr-4 xl:pr-0 print:!pr-0 basis-auto md:basis-1/2 xl:basis-auto print:!basis-auto">
                <EducationSection education={education} />
              </div>
              <div className="md:basis-1/2 xl:basis-auto print:!basis-auto">
                <SkillsSection skills={skills} />
              </div>
              <div className="md:basis-full xl:basis-auto print:!basis-auto">
                <ConferenceSection conferences={conferences} />
              </div>
            </section>
            <section className="basis-full xl:basis-3/4 print:basis-3/4">
              <div id="experience">
                <ExperienceSection jobs={jobs} />
              </div>
              <div id="projects">
                <ProjectSection
                  workProjects={workProjects}
                  personalProjects={personalProjects}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageFadeWrapper>
  );
}
