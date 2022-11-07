import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  GitHub,
  Linkedin,
  Instagram,
  Twitter,
  Menu,
  Disc,
  Mail,
} from "react-feather";
import Canvas from "../components/Canvas";
import { useState } from "react";

export default function PageLayout({ children }) {
  const [expanded, setExpanded] = useState(false);
  function toggleExpanded() {
    setExpanded(!expanded);
  }
  return (
    <>
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen w-screen max-h-screen box-border flex flex-col sm:flex-row bg-black p-2 text-primary">
        <div
          className={`
            absolute sm:relative
            self-end sm:self-auto
            basis-full sm:basis-1/5
            h-[99vh] sm:h-auto
            box-border w-1/2 sm:w-auto
            border-black border-b-8 border-x-8 sm:border-r-8 sm:border-l-0 sm:border-b-0
            sm:px-4 sm:pt-4
            bg-neutral-main flex flex-col justify-between
            transition-transform duration-300 z-20 ${
              expanded
                ? "translate-x-0 sm:transform-none  "
                : "translate-x-full sm:transform-none"
            }`}
        >
          <div id="top-nav" className="animate__animated animate__fadeInDown">
            <div className="mb-2 flex flex-wrap text-center sm:text-left justify-center sm:justify-start">
              <h1 className="text-2xl basis-full">Dylan Phelan</h1>
              <p className="text-lg basis-full font-sans">
                Web Developer & Technical Lead
              </p>
            </div>
            <nav className="flex justify-center sm:justify-start mb-2">
              <Link href="/">
                <a className="inline hover:font-bold after:content-['\00a0//\00a0'] after:inline hover:after:font-normal">
                  {"Home"}
                </a>
              </Link>
              {/* <Link>About</Link> */}
              {/* <Link>Photos</Link> */}
              <Link href="/resume">
                <a className="inline hover:font-bold">{"Resume"}</a>
              </Link>
              {/* <Link>Random Fact</Link> */}
            </nav>
          </div>
          <div className="w-full h-4/5 ">
            <Canvas className="h-full hidden sm:block" />
          </div>
          <div
            id="contact-info"
            className="flex flex-row flex-wrap justify-center first:align-baseline py-2 animate__animated animate__fadeInDown"
          >
            <div className="flex justify-center basis-full sm:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="mailto:dtphelan1@gmail.com">
                <Mail />
              </a>
            </div>
            <div className="flex justify-center basis-full sm:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.linkedin.com/in/dtphelan1">
                <Linkedin />
              </a>
            </div>
            <div className="flex justify-center basis-full sm:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.github.com/Dtphelan1">
                <GitHub />
              </a>
            </div>
            <div className="flex justify-center basis-full sm:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.instagram.com/dtphelan1/">
                <Instagram />
              </a>
            </div>
            <div className="flex justify-center basis-full sm:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://twitter.com/Dtphelan1">
                <Twitter />
              </a>
            </div>
            <div className="flex justify-center basis-full sm:basis-1/3 p-2 cursor-pointer animate__animated hover:animate__tada">
              <a target="__blank" href="https://www.discogs.com/user/dtphelan1">
                <Disc />
              </a>
            </div>
          </div>
        </div>
        <main className="basis-full sm:basis-4/5 overflow-auto bg-neutral-main z-10 ">
          {children}
        </main>
        <button
          className="rounded-full p-2 m-2 absolute top-2 right-2 border sm:hidden text-neutral-main bg-primary z-30"
          onClick={toggleExpanded}
        >
          <Menu size={16} />
        </button>
      </div>
    </>
  );
}
