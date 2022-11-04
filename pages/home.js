import Link from "next/link";
import CircleLeft from "../public/circle-left.svg";
import CircleRight from "../public/circle-right.svg";
import PageFadeWrapper from "../components/PageFadeWrapper";

export default function Drawing() {
  return (
    <PageFadeWrapper>
      <div className="h-full w-full p-36 bg-gradient-to-br from-neutral-main via-neutral-main to-primary-light">
        <h1 className="mb-4">
          <span className="text-lg block">How's it goin'! My name is </span>
          <span className="text-6xl my-6 block">Dylan Phelan</span>
        </h1>
        <p className="text-xl w-8/12">
          I'm a <span className="font-bold">web developer</span> with 6+ years
          experience working on healthcare, social justice, and benefits
          delivery projects. I've created UI's using{" "}
          <span className="font-bold">React and Vue</span>, CLI's and API's
          using Node.js, ML models using python, and architecture
          diagrams/roadmaps to support projects as a technical lead. Seeking
          Boston/remote web developer positions.
        </p>
        <div className="flex flex-wrap ">
          <div className="basis-1/2">
            <button className="text-2xl my-4 border-2 border-primary rounded p-4">
              <Link href="/">Resume</Link>
            </button>
          </div>
          <div className="basis-1/2">
            <button className="text-2xl my-4 border-2 border-primary rounded p-4 ">
              <Link href="/githubWheel">Github</Link>
            </button>
          </div>
        </div>
      </div>
    </PageFadeWrapper>
  );
}
