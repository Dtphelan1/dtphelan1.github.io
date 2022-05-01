import {
  GitHub,
  Linkedin,
  Instagram,
  Twitter,
  Disc,
  Mail,
} from "react-feather";
import Canvas from "../components/Canvas";
import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <main className="h-screen w-screen grid grid-cols-6 grid-flow-col gap-2 bg-black p-2">
        <div className="col-span-1 bg-bg-main px-4 pt-4 flex flex-col justify-between">
          <div id="top-nav" className="">
            <h1 className="text-2xl animate__animated animate__fadeInDown">
              Dylan Phelan //
            </h1>
            <nav className="flex flex-col animate__animated animate__fadeInDown">
              <a>Projects</a>
              <a>About</a>
              <a>Photos</a>
              <a>Random Fact</a>
              {/* What are you doing here? This wasn't meant for your eyes /bonus */}
            </nav>
          </div>
          <Canvas className="animate__animated animate__fadeIn animate__slow" />
          <div
            id="contact-info"
            className="flex flex-row flex-wrap first:align-baseline py-2 animate__animated animate__fadeInDown"
          >
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <Mail />
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <Linkedin />
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <GitHub />
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <Instagram />
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <Twitter />
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <Disc />
            </div>
          </div>
        </div>
        <main className="col-span-5 bg-bg-main "></main>
      </main>
    </PageLayout>
  );
}
