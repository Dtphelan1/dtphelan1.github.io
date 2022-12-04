import Image from "next/image";
import { Printer } from "react-feather";
import headshot from "../../public/headshot.jpeg";

export default function AboutMeHeader({ aboutMe, highlight, handlePrint }) {
  return (
    <div
      id="contact-and-high-level "
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
      <div className="basis-full xl:basis-3/4 print:basis-3/4 xl:p-4 print:p-4 bg-primary text-neutral-main relative">
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
                  <a target="_blank" href={link.link} rel="noopener noreferrer">
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
        {highlight && (
          <div
            id="highlighted-area"
            className="absolute -bottom-4 -right-4 xl:bottom-0 xl:right-0 print:bottom-0 print:right-0 border-t border-l p-1 px-2 border-neutral-50 text-neutral-main w-fit"
          >
            {highlight} Focused
          </div>
        )}
      </div>
    </div>
  );
}
