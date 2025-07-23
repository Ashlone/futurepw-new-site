"use client"
import React from 'react';

export default function ProgramsPage() {
  const programs = [
    {
      title: '🌍 Career Pathfinder Programme',
      description: `Our flagship, multi-phase intervention programme helps Grade 6–13 learners from disadvantaged backgrounds develop career maturity, self-efficacy, academic motivation and long-term career vision. Delivered in collaboration with schools and NGOs, the programme is implemented during LO classes and school holidays. This programme helps learners answer critical questions such as:
      \n- Who am I?\n- What are my interests, skills, values, personality styles?\n- What do I want?\n- What are my options?\n- How do I get there?\n- What am I willing to do?\n- What is my plan to get to the goal?`,
      imageSrc: './programme1.jpg',
    },
    {
      title: '🧠 RIASEC Board Game (South Africa)',
      description: `An engaging, gamified career exploration tool based on Holland’s RIASEC theory. The board game is designed to make career learning fun and interactive, especially for high school learners. Currently under the developmental phase for the Phase 2 Version rollout with support from career psychologists and researchers. In partnership with Career Kit, the game will be used as a learning tool, career guidance, and as a fun and informative game.`,
      imageSrc: './programme2.jpg',
    },
    {
      title: '🤖 AI in Education: Narrative Identity for Primary Learners',
      description: `Launching in 2027 and piloted in Gauteng and the Western Cape, this project, led by Dr Rubina Selthare, leverages AI-assisted storytelling to support primary school learners in understanding their future aspirations. This early intervention helps build career identity from a young age, using accessible digital tools.`,
      imageSrc: './aiproject.jpeg',
    },
    {
      title: '🏞 Rural Career Development Project (Free State)',
      description: `A targeted intervention aimed at bridging the rural-urban career support divide. This project, led by Dr Shingirayi Chamisa, brings mobile career services, workshops, and mentorship to underserved learners in rural areas in the Free State province.`,
      imageSrc: './rural.jpeg',
    },
  ];

  return (
    <>
      <section className="w-full mt-20 py-6 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <p className="text-3xl font-bold tracking-tighter sm:text-5xl">Our programmes</p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container grid items-start justify-center gap-6 px-4 md:gap-10 lg:grid-cols-2 lg:px-6 xl:gap-16">
          {programs.map((program, index) => (
            <ProgramSection
              key={index}
              title={program.title}
              description={program.description}
              imageSrc={program.imageSrc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

interface Program {
  title: string;
  description: string;
  imageSrc: string;
}

function ProgramSection({ title, description, imageSrc }: Program) {
  return (
    <div className="grid gap-4 text-center lg:items-center lg:justify-center lg:text-left">
      <img alt={title} src={imageSrc} className="mx-auto w-full rounded-lg object-cover" />
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-justify text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
