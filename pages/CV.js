import React, { useRef, useState } from "react";
import Image from "next/image";
import { Globe, GitHub, Mail, Linkedin, Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import headshot from "../public/headshot.jpeg";
import PageFadeWrapper from "../components/PageFadeWrapper";
import ConferenceSection from "../components/ConferenceSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ProjectSection from "../components/ProjectSection";
// Data
import education from "../data/education";
import conferences from "../data/conferences";
import jobs from "../data/jobs";
import skills from "../data/skills";
import aboutMe from "../data/aboutMe";
import { workProjects, personalProjects } from "../data/projects";
import ExperienceSection from "../components/ExperienceSection";

export default function CV() {
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
          <div
            id="contact-and-high-level"
            className="max-w-screen-xl flex flex-wrap px-4 my-0 py-4 xl:my-4 xl:py-0  mx-auto bg-primary xl:bg-neutral-main print:bg-neutral-main"
          >
            <div className="flex flex-wrap flex-full items-center basis-full xl:basis-1/4 print:basis-1/4 xl:pr-8 print:pr-8 ">
              <div className="max-h-48 max-w-[10rem] mx-auto">
                <Image
                  src={headshot}
                  className="rounded-full"
                  alt="A photo of Dylan, taken in 2019 from a rooftop restaurant in Morocco. Pictured with medium length brown hair, slightly disheveled and parted on the viewer's right, is a wide-smiling, green-eye squinting Dylan wearing a black floral-print collared shirt. The image is neck-up, and the shirt is barely visible in the crop. A portrait style photo, the head makes way to slightly blurred shrubbery, offering a verdant contrast to the subject's peach-toned skin. Further in the photo's background we see the Old Town of Morocco stretch to the horizon, beige and reddish-brown buildings carrying our eyes to the gray-blue sky behind up."
                />
              </div>
              <button
                className="absolute left-0 top-0 xl:mx-auto xl:relative  flex items-center justify-center w-[10rem] rounded border bg-primary transition-all xl:border-primary border-neutral-main text-neutral-main p-1 px-2 m-2 print:hidden hover:bg-neutral-main hover:text-primary "
                onClick={handlePrint}
              >
                <Printer size={12} className="mr-1" /> Print or PDF
              </button>
            </div>
            {/* Need the wrapping div so the HR can be the same length as the top-level bio info */}
            <div className="basis-full xl:basis-3/4 print:basis-3/4 xl:p-4 print:p-4 bg-primary text-neutral-main">
              <div className="flex items-center justify-between">
                <header className="basis-1/2 mb-1">
                  <h1 className="text-4xl ">{aboutMe.name}</h1>
                  <p>{aboutMe.title}</p>
                </header>
                <address id="links" className="text-xs basis-1/2">
                  <ul className="flex flex-row flex-wrap justify-between">
                    {aboutMe.links.map((link, i) => (
                      <li
                        className="flex items-center px-2 py-1 basis-full sm:basis-1/2 animate__animated hover:animate__pulse"
                        key={link.id}
                      >
                        <a
                          target="_blank"
                          href={link.link}
                          rel="noopener noreferrer"
                        >
                          <link.Icon size={15} className="inline mr-2" />
                          {link.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </address>
              </div>
              <hr className="mb-4 h-1" />
              <p id="mission-statement" className="text-base print:text-sm">
                {aboutMe.elevatorPitch}
              </p>
            </div>
          </div>
          <div
            id="content"
            className=" max-w-screen-xl flex flex-wrap-reverse px-4 my-4 print:!mt-0 mx-auto text-primary bg-neutral-main"
          >
            <section className="basis-full xl:basis-1/4 print:basis-1/4 xl:pr-4 print:pr-4 flex flex-col sm:flex-row xl:flex-col print:!flex-col">
              <div className="pr-0 sm:pr-4 xl:pr-0 print:!pr-0 basis-auto sm:basis-1/2 xl:basis-auto print:!basis-auto">
                <EducationSection education={education} />
              </div>
              <div className="sm:basis-1/2 xl:basis-auto print:!basis-auto">
                <SkillsSection skills={skills} />
              </div>
              <div className="sm:basis-1/2 xl:basis-auto print:!basis-auto">
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
