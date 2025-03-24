import React from 'react'
import WorkExperienceItem from './WorkExperienceItem'

const experiences = [

        {
          "date": "2023-06-01 - 2024-03-01",
          "title": "Full-Stack Developer",
          "company": "Code Connoisseurs",
          "description": "Designed and developed full-stack applications with React, Node.js, and Firebase, integrating AI-powered features for enhanced user experience."
        },
        {
            "date": "2022-09-01 - 2023-05-31",
            "title": "Blockchain Developer",
            "company": "Abstract Eco System",
            "description": "Developed and deployed smart contracts, optimized gas fees, and built decentralized applications (DApps) using Solidity and Foundry."
        },
        {
          "date": "2021-01-15 - 2022-08-30",
          "title": "Software Engineer Intern",
          "company": "Tech Solutions Ltd.",
          "description": "Worked on backend development using Express.js and PostgreSQL, collaborated with cross-functional teams to deliver scalable solutions."
        }
      
]

const WorkExperience = () => {
  return (
    <div className='py-28 max-w-screen-xl mx-auto space-y-6' id="work-experience">
        {/* section heading */}
        <div className='flex flex-wrap gap-3 items-center mb-16 text-white'>
           <p className='font-bold text-xl'>02</p>
           <h2 className='text-3xl sm:text-4xl text-[#ABABB5] font-bold'> Work Experience</h2> 
        </div>

        <div>
            {
                experiences.map((experience, index) => (
                    <WorkExperienceItem
                    key={index}
                    date={experience.date}
                    title={experience.title}
                    company={experience.company}
                    description={experience.description}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default WorkExperience