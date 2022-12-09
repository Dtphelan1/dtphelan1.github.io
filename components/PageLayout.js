import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {
  GitHub,
  Linkedin,
  Instagram,
  Twitter,
  Menu,
  Disc,
  Mail,
  Book,
} from "react-feather";
import Canvas from "../components/Canvas";
import { useState } from "react";

export default function PageLayout({ children }) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  function toggleMenuExpanded() {
    setMenuExpanded(!menuExpanded);
  }
  return (
    <>
      {/* Iconify icon */}
      <Script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" />
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Dylan Phelan&apos;s Personal Website </title>
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
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="
      h-screen w-screen max-h-screen
      box-border
      relative
      flex flex-col md:flex-row
      border-8 border-black text-primary
      overflow-x-hidden overflow-y-auto
      "
      >
        <div
          className={`
            absolute md:relative
            top-0 right-0
            text-right md:text-left
            self-end md:self-auto
            basis-full md:basis-1/5
            h-[99vh] md:h-auto
            box-border w-1/2 md:w-auto
            border-black border-l-8 md:border-r-8 md:border-l-0
            p-4 md:pb-0
            bg-neutral-main flex flex-col justify-start md:justify-between
            transition-transform duration-300 z-20 ${
              menuExpanded
                ? "translate-x-0 md:transform-none  "
                : "translate-x-full md:transform-none"
            }`}
        >
          <div
            id="top-nav"
            className="mt-16 md:mt-0 animate__animated animate__fadeIn"
          >
            <div className="mb-2 flex flex-wrap md:text-left justify-center md:justify-start">
              <h1 className="text-2xl basis-full">Dylan Phelan</h1>
              <p className="text-lg basis-full font-sans">
                Web Developer &
                <br />
                Technical Lead
              </p>
            </div>
            <nav className="flex flex-col md:flex-row justify-center md:justify-start mb-2">
              <Link href="/">
                <a className="block md:inline hover:font-bold md:after:content-['\00a0//\00a0'] md:after:inline hover:after:font-normal">
                  {"Home"}
                </a>
              </Link>
              {/* <Link>About</Link> */}
              {/* <Link>Photos</Link> */}
              <Link href="/cv">
                <a className="block md:inline hover:font-bold md:after:content-['\00a0//\00a0'] md:after:inline hover:after:font-normal">
                  {"CV"}
                </a>
              </Link>
              <Link href="/resume">
                <a className="block md:inline hover:font-bold">{"Resumes"}</a>
              </Link>
              {/* <Link>Random Fact</Link> */}
            </nav>
          </div>
          <div className="w-full h-3/4 hidden md:block animate__animated animate__fadeIn">
            <Canvas className="h-full" />
          </div>
          <section
            id="social-links"
            className="flex flex-wrap justify-end md:justify-center first:align-baseline py-2 animate__animated animate__fadeIn"
          >
            <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="mailto:dtphelan1@gmail.com"
            >
              <Mail />
            </a>
            <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="https://www.linkedin.com/in/dtphelan1"
            >
              <Linkedin />
            </a>
            <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="https://www.github.com/Dtphelan1"
            >
              <GitHub />
            </a>
            {/* <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="https://www.instagram.com/dtphelan1/"
            >
              <Instagram />
            </a> */}
            {/* <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="https://twitter.com/Dtphelan1"
            >
              <Twitter />
            </a> */}
            <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="https://www.discogs.com/user/dtphelan1"
            >
              <Disc />
            </a>
            <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="https://www.duolingo.com/profile/Dylan991330"
            >
              <iconify-icon
                icon="heroicons:language-20-solid"
                width="25"
                height="25"
              ></iconify-icon>
            </a>
            <a
              className="flex justify-end md:justify-center basis-1/2 md:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__pulse"
              target="__blank"
              href="https://app.thestorygraph.com/profile/dphelan1994"
            >
              <Book />
            </a>
          </section>
        </div>
        <main
          className={`basis-full md:basis-4/5 bg-neutral-main z-10 transition-opacity ease-in-out duration-300 ${
            menuExpanded && "opacity-30 overflow-hidden"
          }`}
          onClick={() => menuExpanded && toggleMenuExpanded()}
        >
          {children}
        </main>
        <button
          className="inline-block rounded-full p-2 m-2 fixed top-2 right-2 border md:hidden text-neutral-main bg-primary z-30 hover:bg-neutral-main hover:text-primary hover:border hover:border-primary transition-all"
          onClick={toggleMenuExpanded}
        >
          <Menu size={16} />
        </button>
      </div>
    </>
  );
}
