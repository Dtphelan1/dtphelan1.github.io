import Link from "next/link";
import React, { useRef, useState } from "react";
import PageFadeWrapper from "../../components/PageFadeWrapper";
import { projects, PROJECTTYPES } from "../../data/projects";

export default function Resume() {
  return (
    <PageFadeWrapper className="bg-gradient-to-br from-neutral-main via-neutral-main to-primary-ultra-light p-8 lg:p-32 ">
      <h1 className="text-2xl font-bold mb-2 ">Pick a Resume, Any Resume</h1>
      <p className="my-2 text-xl">
        {
          "It's no secret that individuals tailor their resumes to highlight specific roles & skills. That's part of the fun of resume-crafting – finding the right few projects and deliverables that, together, tell an interesting story. Below are a few of my stories I like the most, collections of skills and projects that provide a glimpse into the kind of work I've done across domains & technology stacks. If you want the full picture, you can always poke through my CV, where I cover even more details from my career."
        }
      </p>
      <div className="text-xl list-inside grid grid-cols-2 md:grid-cols-3 gap-4  ">
        <Link href="resume/react">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            ⚛ <span className="italic break-words">React Experience</span>
          </a>
        </Link>
        <Link href="resume/vue">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🖖 <span className="italic break-words">Vue Experience</span>
          </a>
        </Link>
        {/* <Link href="resume/python">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🐍 <span className="italic break-words">Python Experience</span>
          </a>
        </Link> */}
        <Link href="resume/ux">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            ⚡️ <span className="italic break-words">UX-driven Projects</span>
          </a>
        </Link>
        <Link href="resume/healthcare">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🏥 <span className="italic break-words">Healthcare Projects</span>
          </a>
        </Link>
        <Link href="resume/voting">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🗳 <span className="italic break-words">Voting Projects</span>
          </a>
        </Link>
        <Link href="resume/socialJustice">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            ⚖️{" "}
            <span className="italic break-words"> Social-Justice Projects</span>
          </a>
        </Link>
        <Link href="cv">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer col-span-2 md:col-span-3">
            📚{" "}
            <span className="italic break-words">
              {" "}
              My CV – Everything and More!{" "}
            </span>
          </a>
        </Link>
      </div>
    </PageFadeWrapper>
  );
}
