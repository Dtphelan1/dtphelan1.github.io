import PageLayout from "../components/PageLayout";
import Image from "next/image";
import headshot from "../public/headshot.jpeg";

import { Globe, GitHub, Mail, Linkedin } from "react-feather";

export default function Resume() {
  const links = [
    {
      id: "website",
      link: "https://www.dylanphelan.tech",
      display: "dylanphelan.tech",
      Icon: Globe,
    },
    {
      id: "email",
      link: "mailto:dtphelan1@gmail.com",
      display: "@dtphelan1",
      Icon: GitHub,
    },
    {
      id: "github",
      link: "https://www.github.com/Dtphelan1",
      display: "Dtphelan1@gmail.com",
      Icon: Mail,
    },
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/dtphelan1/",
      display: "/dtphelan1",
      Icon: Linkedin,
    },
  ];
  const aboutMe = {
    name: "Dylan Phelan",
    title: "Frontend Engineer",
    elevatorPitch: `I'm an experienced web developer (esp. React and Vue), Node.js
    backend developer, general purpose python developer, and project
    technical lead. Computer Science Master's focused on AI and AI
    Ethics. Quick learner. Mission driven. Passionate about building
    software to improve healthcare or civic technology programs.`,
  };
  return (
    <PageLayout>
      <article>
        <div
          id="contact-and-high-level "
          className="p-4 max-w-screen-xl mx-auto bg-primary lg:bg-neutral-main flex flex-wrap"
        >
          <div className="basis-full lg:basis-1/4 lg:pr-8 ">
            <div className="justify-center flex max-h-64 max-w-[16rem] mx-auto">
              <Image
                src={headshot}
                className="rounded-full "
                alt="A photo of Dylan, taken in 2019 from a rooftop restaurant in Morocco. Pictured with medium length brown hair, slightly disheveled and parted on the viewer's right, is a wide-smiling, green-eye squinting Dylan wearing a black floral-print collared shirt. The image is neck-up, and the shirt is barely visible in the crop. A portrait style photo, the head makes way to slightly blurred shrubbery, offering a verdant contrast to the subject's peach-toned skin. Further in the photo's background we see the Old Town of Morocco stretch to the horizon, beige and reddish-brown buildings carrying our eyes to the gray-blue sky behind up."
              />
            </div>
          </div>
          {/* Need the wrapping div so the HR can be the same length as the top-level bio info */}
          <div className="basis-full lg:basis-3/4 lg:p-8 bg-primary text-neutral-main">
            <div className="flex items-center justify-between">
              <header className="basis-1/2">
                <h1 className="text-4xl ">{aboutMe.name}</h1>
                <p>{aboutMe.title}</p>
              </header>
              <address id="links" className="text-sm basis-1/2">
                <ul className="flex flex-row flex-wrap">
                  {links.map((link, i) => (
                    <li className="flex items-center mx-2 my-1" key={link.id}>
                      <link.Icon size={16} className="inline mr-2" />
                      <a target="_blank" href={link.link}>
                        {link.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </address>
            </div>
            <hr className="mb-4" />
            <p id="mission-statement">{aboutMe.elevatorPitch}</p>
          </div>
        </div>
        <div className="p-4 max-w-screen-xl mx-auto bg-neutral-main flex flex-wrap-reverse lg:flex-wrap text-primary">
          <div className="basis-full lg:basis-1/4 lg:pr-4">
            <section>
              <h2 className="text-2xl font-bold ">Education</h2>
              <hr className="w-full border-primary pb-4" />
              <span>Courses</span>
              <h3>Tufts University, MS in Computer Science</h3>
              <details>
                <summary>Courses</summary>
                <ul>
                  <li>AI Ethics</li>
                  <li>Working with Corpora</li>
                  <li>Graph Theory</li>
                </ul>
              </details>
            </section>
          </div>
          <div className="basis-full lg:basis-3/4">
            <h2 className="text-2xl font-bold ">Projects</h2>
            <hr className="w-full border-primary pb-4" />
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
