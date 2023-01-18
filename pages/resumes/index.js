import Link from "next/link";
import React, { useRef, useState } from "react";
import PageFadeWrapper from "../../components/PageFadeWrapper";
import { projects, PROJECTTYPES } from "../../data/projects";

export default function Resume() {
  return (
    <PageFadeWrapper className="bg-gradient-to-br from-neutral-main via-neutral-main to-primary-ultra-light p-8 xl:p-32 ">
      <h1 className="text-2xl font-bold mb-2 ">
        Different Resumes, Different Stories
      </h1>
      <p className="my-2 text-xl">
        {
          "It's no secret that we tailor our resumes for different roles. That's part of the fun of resume-crafting – finding that combination of projects and deliverables that, together, tell an interesting story. Below are a few of the stories I tell most-often, each resume a different glimpse into the work I've done across domains & technology stacks. If you want the full picture, you can always poke through my CV, where I cover even more details from my career."
        }
      </p>
      <div className="text-xl list-inside grid grid-cols-2 md:grid-cols-3 gap-4  ">
        <Link href="resumes/react">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            ⚛️ <span className="italic break-words ml-1">React Experience</span>
          </a>
        </Link>
        <Link href="resumes/vue">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🖖 <span className="italic break-words ml-1">Vue Experience</span>
          </a>
        </Link>
        {/* <Link href="resumes/python">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🐍 <span className="italic break-words ml-1">Python Experience</span>
          </a>
        </Link> */}
        <Link href="resumes/ux">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            ⚡️
            <span className="italic break-words ml-1">UX-driven Projects</span>
          </a>
        </Link>
        <Link href="resumes/healthcare">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🏥
            <span className="italic break-words ml-1">Healthcare Projects</span>
          </a>
        </Link>
        <Link href="resumes/voting">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            🗳️ <span className="italic break-words ml-1">Voting Projects</span>
          </a>
        </Link>
        <Link href="resumes/socialJustice">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer">
            ⚖️
            <span className="italic break-words ml-1">
              Social-Justice Projects
            </span>
          </a>
        </Link>
        <Link href="cv">
          <a className="my-2 px-2 rounded border border-primary w-full h-full flex flex-wrap justify-center items-center text-center hover:bg-primary hover:text-neutral-main cursor-pointer col-span-2 md:col-span-3">
            📚
            <span className="italic break-words ml-1">
              My CV – Everything and More!
            </span>
          </a>
        </Link>
      </div>
    </PageFadeWrapper>
  );
}
