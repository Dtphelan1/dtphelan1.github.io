import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PageFadeWrapper from "./PageFadeWrapper";
import EducationSection from "./resumeSections/EducationSection";
import ExperienceSection from "./resumeSections/ExperienceSection";
import SkillsSection from "./resumeSections/SkillsSection";
import ProjectSection from "./resumeSections/ProjectSection";
import AboutMeSection from "./resumeSections/AboutMeSection";
// Data
import education from "../data/education";
import jobs from "../data/jobs";
import skills from "../data/skills";
import aboutMe from "../data/aboutMe";

export default function CommonResumeFormat({
  workProjects,
  personalProjects,
  highlightSection,
}) {
  // Printing logic
  // Ref of the component to print
  const componentRef = useRef();
  // Date for file-name time stamping
  // const today = new Date();
  // Set up printing hook
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: `${[
  //     today.getDate(),
  //     today.getMonth() + 1,
  //     today.getFullYear(),
  //   ].join("-")}-Dylan-Phelan-Resume`,
  // });

  return (
    <PageFadeWrapper>
      <div className="h-screen  md:h-auto md:max-h-[97vh] w-full text-sm">
        <div
          ref={componentRef}
          className="relative overflow-clip mx-auto print:min-h-screen"
        >
          <AboutMeSection
            aboutMe={aboutMe}
            highlightSection={highlightSection}
            // handlePrint={handlePrint}
          />
          <div
            id="content"
            className=" max-w-screen-xl flex flex-wrap-reverse px-4 my-4 print:!mt-0 mx-auto text-primary bg-neutral-main"
          >
            <section className="basis-full xl:basis-1/4 print:basis-1/4 xl:pr-4 print:pr-4 flex flex-col md:flex-row xl:flex-col print:!flex-col">
              <div className="pr-0 md:pr-4 xl:pr-0 print:!pr-0 basis-auto md:basis-1/2 xl:basis-auto print:!basis-auto">
                <EducationSection education={education} />
              </div>
              <div className="md:basis-1/2 xl:basis-auto print:!basis-auto">
                <SkillsSection skills={skills} />
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
