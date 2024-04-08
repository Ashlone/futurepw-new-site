"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaChevronRight,
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
              Discover Your Future
            </h1>
          </div>
          <div className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            <p>
              Providing the tools and knowledge to help you find the career of
              your dreams
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
  </Slider>
</div>
      </section>
      <hr />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Our Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
                At Future Pathways Consultants, we are committed to providing
                comprehensive career guidance and support to high school
                learners in South Africa. Our services are tailored to meet the
                specific needs of learners in Grades 9-12. Here is what we
                offer:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <ServiceItem
              icon={
                <FaMedal color="#093103" className="h-12 w-12 rounded-lg" />
              }
              title="Career Guidance and Support"
              link="#"
            />
            <ServiceItem
              icon={<FaBook color="#093103" className="h-12 w-12 rounded-lg" />}
              title="Grade 9-10 Subject Choices"
              link="#"
            />
            <ServiceItem
              icon={
                <FaGraduationCap
                  color="#093103"
                  className="h-12 w-12 rounded-lg"
                />
              }
              title="Grade 11-12 Degree Choices"
              link="#"
            />
            <ServiceItem
              icon={
                <FaLaptop color="#093103" className="h-12 w-12 rounded-lg" />
              }
              title="Career Guidance for Higher Education Students"
              link="#"
            />
            <ServiceItem
              icon={
                <FaRegCalendarAlt
                  color="#093103"
                  className="h-12 w-12 rounded-lg"
                />
              }
              title="Career Events and Activities"
              link="#"
            />
          </div>
        </div>
      </section>
      <hr /> {/* Divider */}
      <section className="w-full bg-[#093103] py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Find Your Path
            </h1>
            <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
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
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              How It Works
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
              We provide learners with the tools and resources they need to
              explore career options, connect with mentors, and access
              educational opportunities.
            </p>
          </div>
          <div className="mx-auto w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:gap-10">
            <div className="flex flex-col items-center space-y-2">
              <FaBaby color="#093103" className="w-24 h-24" />
              <div className="space-y-2 text-center">
                <h3 className="font-bold">Explore</h3>
                <p className="text-sm text-gray-500 md:text-base text-black">
                  Learners can take career assessments and explore different
                  career paths.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GoMilestone color="#093103" className="w-24 h-24" />
              <div className="space-y-2 text-center">
                <h3 className="font-bold">Connect</h3>
                <p className="text-sm text-gray-500 md:text-base text-black">
                  Access to mentorship programs where learners can connect with
                  industry professionals.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaSchool color="#093103" className="w-24 h-24" />
              <div className="space-y-2 text-center">
                <h3 className="font-bold">Learn</h3>
                <p className="text-sm text-gray-500 md:text-base text-black">
                  Access to educational resources and information about
                  scholarships and internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr /> {/* Divider */}
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
      <Link
        href="/services"
        className="inline-flex items-center text-[#E8C316] text-sm underline underline-offset-2"
      >
        Learn More
        <FaChevronRight className="h-4 w-4 ml-1.5" />
      </Link>
    </div>
  );
}
