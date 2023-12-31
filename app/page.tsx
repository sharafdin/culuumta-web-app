import Image from "next/image";
import Hero from "./components/home/Hero";
import Explore from "./components/home/Explore";
import Learn from "./components/home/Learn";
import Buy from "./components/home/Buy";
import Manage from "./components/home/Manage";
import Enjoy from "./components/home/Enjoy";
import Portfolio from "./components/home/Portfolio";
import DownloadBtn from "./components/home/DownloadBtn";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-20 md:mt-[28rem]">
        <Explore />
        <Learn />
        <Buy />
        <Manage />
        <Enjoy />
        <Portfolio />
      </div>
      <DownloadBtn />
    </>
  );
}
