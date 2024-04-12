"use client"
import React from 'react';

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Empowering South African Youth',
      description: 'Join us in shaping a brighter future for South African youth. Our Career Pathfinder Programme empowers learners to take control of their destinies.',
      imageSrc: './programme1.jpg',
    },
    {
      title: 'Enhanced Career Readiness',
      description: 'Implemented during Life Orientation classes, it enhances career maturity, personal agency, self-efficacy, and goal-setting abilities, helping learners make informed career choices.',
      imageSrc: './programme2.jpg',
    },
    {
      title: 'Community Partnership',
      description: 'We aim to partner with schools in the Gauteng Region to ensure every high school learner benefits. Contact us or donate to support a child\'s career journey to a successful career.',
      imageSrc: './programme3.jpg',
    },
  ];

  return (
    <>
      <section className="w-full mt-20 py-6 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <p className="text-3xl font-bold tracking-tighter sm:text-5xl">Our programs</p>
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
