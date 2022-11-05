import { GitHub, Linkedin, Mail, MousePointer } from "react-feather";
import PageFadeWrapper from "../components/PageFadeWrapper";

export default function BusinessCard() {
  return (
    <PageFadeWrapper>
      <div className="relative m-8 p-8 w-[600px] h-[314px] flex flex-col justify-between bg-neutral-main text-primary border-8 border-black text-xl">
        <header className="mb-4">
          <h1 className="text-4xl font-serif">Dylan Phelan</h1>
          <h2 className="text-2xl">Web Developer & Technical Lead</h2>
        </header>
        <address className="mb-">
          <div>
            <GitHub size={20} className="inline mr-2" />
            <p className="inline">@dtphelan1</p>
          </div>
          <div>
            <Mail size={20} className="inline mr-2" />
            <p className="inline">dtphelan1@gmail.com</p>
          </div>
          <div>
            <Linkedin size={20} className="inline mr-2" />
            <p className="inline">/dtphelan1</p>
          </div>
        </address>
        <div className="absolute bg-primary bottom-0 right-0 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-10 right-0 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-0 right-10 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-20 right-0 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-10 right-10 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-0 right-20 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-[7.5rem] right-0 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-20 right-10 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-10 right-20 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-0 right-[7.5rem] w-10 h-10"></div>
        <div className="absolute bg-primary bottom-[10rem] right-0 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-[7.5rem] right-10 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-20 right-20 w-10 h-10"></div>
        <div className="absolute bg-primary bottom-10 right-[7.5rem] w-10 h-10"></div>
        <div className="absolute bg-primary bottom-0 right-[10rem] w-10 h-10"></div>
        <p className="absolute bg-primary text-neutral-main bottom-9 right-10 w-12 text-bold text-right">
          <MousePointer size={32} className="ml-auto" />
        </p>
      </div>
    </PageFadeWrapper>
  );
}
