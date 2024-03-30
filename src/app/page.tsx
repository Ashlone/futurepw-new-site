
"use client"
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight, FaRegCalendarAlt, FaMedal, FaBook, FaGraduationCap, FaLaptop, FaBaby, FaSchool } from "react-icons/fa";
import { GoMilestone } from "react-icons/go";
import ContactModal from "./components/modal";

export default function Component() {

  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  const handleConsultUsClick = () => {
    setConsultModalOpen(true);
  };

  const handleContactUsClick = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Future
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Providing the tools and knowledge to help you find the career of your dreams
                  </p>
                </div>
                <button onClick={handleContactUsClick} className="text-black inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                  Contact Us
                </button>
              </div>
              <img
                alt="Hero"
                className="mx-auto rounded-xl object-cover object-center sm:w-full lg:w-auto"
                src="./hero.jpg"
              />
            </div>
          </div>
        </section>
        <hr /> {/* Divider */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Future Pathways Consultants, we are committed to providing comprehensive career guidance and support to high school learners in South Africa. Our services are tailored to meet the specific needs of learners in Grades 9-12. Here is what we offer:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <ServiceItem
                icon={<FaMedal className="h-12 w-12 rounded-lg" />}
                title="Career Guidance and Support"
                link="#"
              />
              <ServiceItem
                icon={<FaBook className="h-12 w-12 rounded-lg" />}
                title="Grade 9-10 Subject Choices"
                link="#"
              />
              <ServiceItem
                icon={<FaGraduationCap className="h-12 w-12 rounded-lg" />}
                title="Grade 11-12 Degree Choices"
                link="#"
              />
              <ServiceItem
                icon={<FaLaptop className="h-12 w-12 rounded-lg" />}
                title="Career Guidance for Higher Education Students"
                link="#"
              />
              <ServiceItem
                icon={<FaRegCalendarAlt className="h-12 w-12 rounded-lg" />}
                title="Career Events and Activities"
                link="#"
              />
            </div>
          </div>
        </section>
        <hr /> {/* Divider */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Find Your Path</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your career guidance for high school learners.
              </p>
            </div>
            <button onClick={handleConsultUsClick} className="text-black inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
              Contact Us
            </button>
          </div>
        </section>
        <hr /> {/* Divider */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We provide learners with the tools and resources they need to explore career options, connect
                with mentors, and access educational opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:gap-10">
              <div className="flex flex-col items-center space-y-2">
                <FaBaby className="w-24 h-24" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Explore</h3>
                  <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    Learners can take career assessments and explore different career paths.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <GoMilestone className="w-24 h-24" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Connect</h3>
                  <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    Access to mentorship programs where learners can connect with industry professionals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaSchool className="w-24 h-24" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Learn</h3>
                  <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    Access to educational resources and information about scholarships and internships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr /> {/* Divider */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
  <div className="container grid items-center gap-6 px-4 text-center md:px-6">
    <div className="space-y-2">
      <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our programs</h2>
      <p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Our flagship programme, the &quot;Career Pathfinder: You are the Master of your own destiny&quot;
        is a multi-phase intervention designed to empower high school learners with the tools they
        need to navigate their future careers. This programme helps learners answer critical
        questions such as:
      </p>
    </div>
    <div className="mx-auto w-full max-w-2xl grid gap-4 items-center justify-center sm:grid-cols-2 lg:gap-10">
      <img
        alt="Image"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        height="310"
        src="./class.jpg"
        width="550"
      />
      <div className="mx-auto space-y-4">
        <ul className="grid gap-6">
          <li>
            <div className="grid gap-1">
              <h3 className="text-black text-xl font-bold">Empowering South African Youth</h3>
              <p className="text-black dark:text-gray-400">
                Join us in shaping a brighter future for South African youth. Our Career Pathfinder Programme empowers learners to take control of their destinies.
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-1">
              <h3 className="text-black text-xl font-bold">Enhanced Career Readiness</h3>
              <p className="text-black dark:text-gray-400">
                Implemented during Life Orientation classes, it enhances career maturity, personal agency, self-efficacy, and goal-setting abilities, helping learners make informed career choices
              </p>
            </div>
          </li>
          <li>
            <div className="grid gap-1">
              <h3 className="text-black text-xl font-bold">Community Partnership</h3>
              <p className="text-black dark:text-gray-400">
                We aim to partner with schools in the Western Cape Region to ensure every high school learner benefits. Contact us or donate to support a child's career journey to a successful career.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

        <hr /> {/* Divider */}
        <section className="flex flex-col items-center justify-center w-full py-6 md:py-12">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Sponsor a Learner for Career Guidance & Support
              </h2>
              <p className="max-w-[600px] text-center  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Help us provide mentorship and resources to learners interested in tech careers. Your sponsorship will make
                a difference in their lives.
              </p>
            </div>
            <div className="mx-auto max-w-sm space-y-2 text-center">
              <p className="font-semibold">Starting from R100</p>
            </div>
            <div className="mx-auto max-w-sm space-y-2 text-center">
              <h3 className="font-semibold">Our Banking Details</h3>
              <dl className="grid w-full grid-cols-2 gap-1 text-xs">
                <div>Account Name: FUTURE PATHWAYS CONSULTANTS NPC</div>
                <div>Bank: FIRST NATIONAL BANK</div>
                <div>Account No: 63025588550</div>
                <div>Branch:220323 </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <ContactModal isOpen={consultModalOpen || contactModalOpen} onClose={() => {setConsultModalOpen(false); setContactModalOpen(false);}} />
    </div>
  );
}

function ServiceItem({ icon, title, link }: { icon: React.ReactNode; title: string; link: string; }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <h3 className="font-bold">{title}</h3>
      <Link href="/services" className="inline-flex items-center text-sm underline underline-offset-2">
        Learn More
        <FaChevronRight className="h-4 w-4 ml-1.5" />
      </Link>
    </div>
  );
}

