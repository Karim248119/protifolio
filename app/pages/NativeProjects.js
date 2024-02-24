import React from "react";
import ProjectCard from "../Components/ProjectCard";

export default function NativeProjects() {
  return (
    <div>
      <h1 className=" text-5xl font-bold pt-14 pb-5 text-center w-full text-bg capitalize bg-gb">
        Mobile projects
      </h1>
      <div className=" h-[100vh] bg-gb w-full grid grid-cols-3 grid-rows-2 gap-10 px-40 py-20 relative">
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/Ringfill.png"}
          title={"Ringfill"}
          figmaLINK={
            "https://www.figma.com/file/bTtKG6F851WaOB8n4aVxhA/RF-mobile?type=design&node-id=0%3A1&mode=design&t=4LITcOJmjmkbSFZV-1"
          }
          githubLink={"https://github.com/aheart500/Ringfill"}
        />
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/MedC.jpg"}
          title={"MedC"}
          githubLink={"https://github.com/Karim248119/MedC"}
        />
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/night activities.png"}
          title={"NA"}
          githubLink={true}
          figmaLINK={
            "https://www.figma.com/file/evOWv5bNFT0ptlfrLXJ3kr/NA?type=design&node-id=0%3A1&mode=design&t=TiKMq5ENLJHivG2P-1"
          }
        />
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/Library.png"}
          title={"Library"}
          githubLink={true}
        />
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/delivery.png"}
          title={"Delivery"}
          githubLink={"https://github.com/Karim248119/K-Dlivery"}
        />
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/jobs.png"}
          title={"Jobs"}
          githubLink={"https://github.com/Karim248119/Jobs"}
        />
      </div>
    </div>
  );
}
