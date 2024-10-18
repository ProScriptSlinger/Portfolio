import {ExperienceItemType, experiences, skills } from "@/utils/experience";
import React from "react";

const Experience: React.FC<{}> = () => {

  const Skill = ({key, skill}:{key:string, skill:string}) =>{
    return(
      <div key={key} className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
        {skill}
      </div>
    )
  }

  const ExperienceItem = ({key, companyName, position, period, location, description}:{key:number, companyName:string, position:string, period:string, location:string, description:string}) =>{
    return(
      <div key={key}>
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">{`${companyName} /`}</span> {position}
          </p>
          <p className="text-gray-300">{`${period}, ${location}`}</p>
        </div>
        <p className="text-gray-300 pt-5">
          {description}
        </p>
      </div>
    )
  }

  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        {experiences.map((experience : ExperienceItemType, index ) => (
          <ExperienceItem key={index} {...experience} />
        ))}        
        <div className="flex-wrap flex sm:flex-row gap-1">
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
