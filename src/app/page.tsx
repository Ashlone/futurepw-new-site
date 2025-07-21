"use client";
import { useState } from "react";
import {
  FaRegCalendarAlt,
  FaMedal,
  FaBook,
  FaGraduationCap,
  FaLaptop,
  FaBaby,
  FaSchool,
} from "react-icons/fa";
import { GoMilestone } from "react-icons/go";
import ContactModal from "./components/modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banking from "./components/banking";
import { Image } from "@nextui-org/react";
import Link from "next/link";


export default function Component() {
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  // Configure carousel settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const handleConsultUsClick = () => {
    setConsultModalOpen(true);
  };

  const handleContactUsClick = () => {
    setContactModalOpen(true);
  };

  return (
    <>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2 mt-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              WELCOME TO FUTURE PATHWAYS CONSULTANTS
            </h1>
          </div>
          <div className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            <p>
              Empowering the Next Generation Through Career Innovation and Equity
            </p>
          </div>
          <button
            onClick={handleContactUsClick}
            className="text-black bg-[#E8C316] inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Contact Us
          </button>
        </div>
        <div className="mt-10 justify-center items-center">
          <Slider {...settings}>
            <Image
              className="max-w-full h-auto"
              src="/hero.jpg"
              width={400}
              height={300}
            />
            <Image
              className="max-w-full h-auto"
              src="/hero2.jpg"
              width={400}
              height={300}
            />
            <Image
              className="max-w-full h-auto"
              src="/hero3.jpg"
              width={400}
              height={300}
            />
            <Image
              className="max-w-full h-auto"
              src="/hero4.jpg"
              width={400}
              height={300}
            />
            <Image
              className="max-w-full h-auto"
              src="/hero5.jpg"
              width={400}
              height={300}
            />
            <Image
              className="max-w-full h-auto"
              src="/hero6.jpg"
              width={400}
              height={300}
            />
          </Slider>
        </div>
      </section>
      {/* OUR PURPOSE section */}
      <section className="w-full py-8 md:py-12 bg-[#f5f5f5]">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">OUR PURPOSE</h2>
          <p className="text-gray-700 md:text-lg">
            Reducing youth unemployment through transformative career education. We see career guidance as a tool of social justice, and we are building an ecosystem where every learner—regardless of geography, gender, or economic background—has access to guidance, tools, and belief in their future.
          </p>
        </div>
      </section>
      <hr className="border-t-2 border-[#CA0101]" /> {/* Divider */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Offer
              </h2>
              <p className="max-w-[900px] text-justify word-spacing-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
                We provide tailored support for learners in Grades 9–12, as well as interventions in primary schools through our AI and storytelling programmes. Our services are designed to break down systemic barriers and ensure all learners, regardless of background, can access meaningful career guidance and support. <br/><br/>
                <b>Our Services Include:</b><br/>
                • Career counselling and assessments<br/>
                • Subject and degree guidance<br/>
                • Personality and aptitude profiling<br/>
                • Industry visits, guest speakers & workshops<br/>
                • Internship and tertiary preparation support (Career Psychology)<br/>
                • Educator & parent training on career topics
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <ServiceItem
              icon={
                <FaMedal color="#093103" className="h-12 w-12 rounded-lg" />
              }
              title="Career Counselling & Assessments"
              link="#"
            />
            <ServiceItem
              icon={<FaBook color="#093103" className="h-12 w-12 rounded-lg" />}
              title="Subject & Degree Guidance"
              link="#"
            />
            <ServiceItem
              icon={
                <FaGraduationCap
                  color="#093103"
                  className="h-12 w-12 rounded-lg"
                />
              }
              title="Personality & Aptitude Profiling"
              link="#"
            />
            <ServiceItem
              icon={
                <FaLaptop color="#093103" className="h-12 w-12 rounded-lg" />
              }
              title="Industry Visits, Guest Speakers & Workshops"
              link="#"
            />
            <ServiceItem
              icon={
                <FaRegCalendarAlt
                  color="#093103"
                  className="h-12 w-12 rounded-lg"
                />
              }
              title="Internship & Tertiary Preparation Support"
              link="#"
            />
            <ServiceItem
              icon={
                <GoMilestone color="#093103" className="h-12 w-12 rounded-lg" />
              }
              title="Educator & Parent Training"
              link="#"
            />
          </div>
        </div>
      </section>
      
      <section className="w-full bg-[#093103]  py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Find Your Path
            </h1>
            <p className="max-w-[600px] text-justify word-spacing-2 text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
              Your career guidance for high school learners.
            </p>
          </div>

          <button
            onClick={handleConsultUsClick}
            className="text-black bg-[#E8C316] inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Consult Us
          </button>
        </div>
      </section>
      <Slider {...settings} className="mt-10">
        <Image
          className="max-w-full h-auto"
          src="/hero7.jpg"
          width={400}
          height={300}
        />
        <Image
          className="max-w-full h-auto"
          src="/hero8.jpg"
          width={400}
          height={300}
        />
        <Image
          className="max-w-full h-auto"
          src="/hero9.jpg"
          width={400}
          height={300}
        />
        <Image
          className="max-w-full h-auto"
          src="/hero10.jpg"
          width={400}
          height={300}
        />
        <Image
          className="max-w-full h-auto"
          src="/hero11.jpg"
          width={400}
          height={300}
        />
        <Image
          className="max-w-full h-auto"
          src="/hero12.jpg"
          width={400}
          height={300}
        />
        <Image
          className="max-w-full h-auto"
          src="/hero13.jpg"
          width={400}
          height={300}
        />
      </Slider>
      <hr className="border-t-2 border-[#CA0101]" /> {/* Divider */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <Banking />
      </section>
      
      <ContactModal
        isOpen={consultModalOpen || contactModalOpen}
        onClose={() => {
          setConsultModalOpen(false);
          setContactModalOpen(false);
        }}
      />
    </>
  );
}

function ServiceItem({
  icon,
  title,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}

