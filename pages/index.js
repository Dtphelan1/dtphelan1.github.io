import Link from "next/link";
import Image from "next/image";
import headshot from "../public/headshot.jpeg";
import CircleRight from "../public/circle-right.svg";
import PageFadeWrapper from "../components/PageFadeWrapper";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <PageFadeWrapper className="bg-gradient-to-br from-neutral-main via-neutral-main to-primary-light p-8 lg:p-36 overflow-auto ">
      <div
        id={styles["homepage"]}
        className="min-h-full max-w-screen-xl mx-auto relative self-center"
      >
        <div id={styles["homepage-intro"]} className="text-xl ">
          <h1 className="mb-10">
            <span className="text-lg block mb-2">
              How's it goin'! My name is{" "}
            </span>
            <span className="text-6xl block font-serif ">Dylan Phelan</span>
          </h1>
        </div>
        <div id={styles["homepage-about"]} className="text-xl ">
          <p className="mb-2">
            I'm a <span className="font-bold">web developer</span> and{" "}
            <span className="font-bold">technical lead</span> with 6+ years
            experience working on healthcare, social justice, and benefits
            delivery projects.
          </p>
          <p className="mb-2">
            My projects have supported clinicians visualizing the future of{" "}
            <span className="font-bold">oncology note taking</span>, data
            scientists exchanging resources surrounding{" "}
            <span className="font-bold">COVID-19 back in 2020</span>, clinical
            trials <span className="font-bold">collecting real world data</span>{" "}
            for comparison against traditional data elements, research teams
            exploring how to make{" "}
            <span className="font-bold">
              filing for unemployment benefits easier
            </span>
            , and much more!
          </p>
          <p>
            My teams and I have developed UI's using{" "}
            <span className="font-bold">React and Vue</span>, implemented CLIs
            and APIs using <span className="font-bold">Node.js</span>, trained
            machine learning models and run voting science simulations using{" "}
            <span className="font-bold">Python</span>, and created{" "}
            <span className="font-bold">
              architecture diagrams and roadmaps
            </span>{" "}
            to support projects technical success.
          </p>
        </div>
        <div
          id={styles["homepage-button"]}
          className="flex flex-wrap flex-col mt-8"
        >
          <div className="basis-1/2">
            <Link href="/resume">
              <button className="text-xl my-4 border-2 border-primary rounded p-4">
                Check out my Resume
              </button>
            </Link>
          </div>
        </div>
        <div
          id={styles["homepage-headshot"]}
          className="w-32 h-32 md:w-48 md:h-48 self-center shadow-xl rounded-full"
        >
          <Image
            src={headshot}
            className="rounded-full"
            alt="A photo of Dylan, taken in 2019 from a rooftop restaurant in Morocco. Pictured with medium length brown hair, slightly disheveled and parted on the viewer's right, is a wide-smiling, green-eye squinting Dylan wearing a black floral-print collared shirt. The image is neck-up, and the shirt is barely visible in the crop. A portrait style photo, the head makes way to slightly blurred shrubbery, offering a verdant contrast to the subject's peach-toned skin. Further in the photo's background we see the Old Town of Morocco stretch to the horizon, beige and reddish-brown buildings carrying our eyes to the gray-blue sky behind up."
          />
        </div>
        <p
          id={styles["homepage-personal-about"]}
          className="text-xl max-w-full lg:max-w-md"
        >
          <h2 className="text-xl font-bold">
            In my free time I'm usually...
            {/* <hr className="w-full border-primary pb-4  pr-" /> */}
          </h2>

          <ul className="text-lg list-inside list-disc">
            <li className="my-2">Learning Japanese on Duolingo and WaniKani</li>
            <li className="my-2">
              Hosting dinner parties with my friends, feeding them cocktails,
              natural wine, and home-cooked vegan meals
            </li>
            <li className="my-2">
              Reading everything from poetry and non-fiction, to romance and
              murder mysteries
            </li>
            <li className="my-2">
              Playing video games on retro hardware or new emulator handhelds
            </li>
            <li className="my-2">
              Listening to some of my vinyls and cassettes – or buying more for
              the collection
            </li>
          </ul>
        </p>
      </div>
    </PageFadeWrapper>
  );
}
