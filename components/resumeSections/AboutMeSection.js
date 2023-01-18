import Image from "next/image";
import { Download } from "react-feather";
import headshot from "../../public/headshot.jpeg";

export default function AboutMeHeader({
  aboutMe,
  highlightSection,
  handlePrint,
}) {
  const sectionName = highlightSection.toLocaleLowerCase().split(" ").join("-");
  return (
    <div
      id="contact-and-high-level "
      className="max-w-screen-xl flex flex-wrap px-4 my-0 pt-4 pb-8 xl:my-4 xl:py-0 print:my-4 print:py-0  mx-auto bg-primary xl:bg-neutral-main print:bg-neutral-main "
    >
      <div className="flex flex-col flex-full items-center basis-full xl:basis-1/4 print:basis-1/4 xl:pr-8 print:pr-8 ">
        <div className="max-h-48 max-w-[10rem]">
          <Image
            src={headshot}
            className="rounded-full"
            alt="A photo of Dylan, taken in 2019 from a rooftop restaurant in Morocco. Pictured with medium length brown hair, slightly disheveled and parted on the viewer's right, is a wide-smiling, green-eye squinting Dylan wearing a black floral-print collared shirt. The image is neck-up, and the shirt is barely visible in the crop. A portrait style photo, the head makes way to slightly blurred shrubbery, offering a verdant contrast to the subject's peach-toned skin. Further in the photo's background we see the Old Town of Morocco stretch to the horizon, beige and reddish-brown buildings carrying our eyes to the gray-blue sky behind up."
          />
        </div>
        {/* {handlePrint && (
          <button
            className="absolute left-0 top-0 xl:relative  flex items-center justify-center w-[10rem] rounded border bg-primary transition-all xl:border-primary border-neutral-main text-neutral-main p-1 px-2 m-2 print:hidden hover:bg-neutral-main hover:text-primary "
            onClick={handlePrint}
          >
            <Download size={12} className="mr-1" />
            Save PDF
          </button>
        )} */}
        {handlePrint && (
          <a
            className="absolute left-0 top-0 xl:relative  flex items-center justify-center w-[10rem] rounded border bg-primary transition-all xl:border-primary border-neutral-main text-neutral-main p-1 px-2 m-2 print:hidden hover:bg-neutral-main hover:text-primary "
            href={`/pdfs/17-01-2023/${sectionName}.pdf`}
            download={`Dylan-Phelan-resume-${sectionName}.pdf`}
          >
            <Download size={12} className="mr-1" />
            Save PDF
          </a>
        )}
      </div>
      {/* Need the wrapping div so the HR can be the same length as the top-level bio info */}
      <div className="basis-full xl:basis-3/4 print:basis-3/4 xl:p-4 print:p-4 bg-primary text-neutral-main relative">
        <div className="flex items-center justify-between">
          <header className="basis-1/2 print:basis-2/5 mb-1">
            <h1 className="text-4xl ">{aboutMe.name}</h1>
            <p>{aboutMe.title}</p>
          </header>
          <address id="links" className="text-xs basis-1/2 print:basis-3/5">
            <ul className="flex flex-row flex-wrap justify-between">
              {aboutMe.links.map((link, i) => (
                <li
                  className="flex items-center px-2 py-1 basis-full print:!basis-1/2 md:basis-1/2 animate__animated hover:animate__pulse"
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
        {highlightSection && (
          <div
            id="highlight-area"
            className="text-base print:text-sm absolute -bottom-8 -right-4 xl:bottom-0 xl:right-0 print:bottom-0 print:right-0 border-t border-l p-1 px-2 border-neutral-50 text-neutral-main w-fit"
          >
            {highlightSection} Resume
          </div>
        )}
      </div>
    </div>
  );
}
