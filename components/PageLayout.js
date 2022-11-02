import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  GitHub,
  Linkedin,
  Instagram,
  Twitter,
  Disc,
  Mail,
} from "react-feather";
import Canvas from "../components/Canvas";
import styles from "../styles/PageLayout.module.css";

export default function PageLayout({ children }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Dylan Phelan's Portfolio </title>
        <meta name="title" content="Dylan Phelan's Personal Website" />
        <meta
          name="description"
          content="Portfolio for the web developer Dylan Phelan, highlighting contributions to projects in healthcare, voting science, social justice, benefits delivery, and more!"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dylanphelan.tech/" />
        <meta property="og:title" content="Dylan Phelan's Personal Website" />
        <meta
          property="og:description"
          content="Portfolio for the web developer Dylan Phelan, highlighting contributions to projects in healthcare, voting science, social justice, benefits delivery, and more!"
        />
        <meta property="og:image" content="/business-card-meta-image.png" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dylanphelan.tech/" />
        <meta
          property="twitter:title"
          content="Dylan Phelan's Personal Website"
        />
        <meta
          property="twitter:description"
          content="Portfolio for the web developer Dylan Phelan, highlighting contributions to projects in healthcare, voting science, social justice, benefits delivery, and more!"
        />
        <meta
          property="twitter:image"
          content="/business-card-meta-image.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen max-h-screen box-border flex flex-col sm:flex-row bg-black p-2 text-primary">
        <div className="basis-1/5 border-black border-b-8 sm:border-b-0 sm:border-r-8 bg-neutral-main px-4 pt-4 flex flex-col justify-between">
          <div id="top-nav" className="">
            <h1 className="text-2xl animate__animated animate__fadeInDown">
              Dylan Phelan //
            </h1>
            <nav className="flex flex-col animate__animated animate__fadeInDown">
              <Link href="/">Home</Link>
              {/* <Link>About</Link> */}
              {/* <Link>Photos</Link> */}
              <Link href="/resume">Resume</Link>
              {/* <Link>Random Fact</Link> */}
              {/* What are you doing here? This wasn't meant for your eyes /bonus */}
            </nav>
          </div>
          <Canvas className="h-full hidden sm:block" />
          <div
            id="contact-info"
            className="flex flex-row flex-wrap justify-center first:align-baseline py-2 animate__animated animate__fadeInDown"
          >
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="mailto:dtphelan1@gmail.com">
                <Mail />
              </a>
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.linkedin.com/in/dtphelan1">
                <Linkedin />
              </a>
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.github.com/Dtphelan1">
                <GitHub />
              </a>
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.instagram.com/dtphelan1/">
                <Instagram />
              </a>
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://twitter.com/Dtphelan1">
                <Twitter />
              </a>
            </div>
            <div className="flex justify-center basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.discogs.com/user/dtphelan1">
                <Disc />
              </a>
            </div>
          </div>
        </div>
        <main className="basis-4/5 bg-neutral-main ">{children}</main>
      </div>
    </>
  );
}
