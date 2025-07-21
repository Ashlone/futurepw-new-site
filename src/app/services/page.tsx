import Partner from "../components/partner";

export default function ServicesComponent() {
  return (
    <>
      <section className="mt-20 w-full py-6 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <p className="text-3xl  font-bold tracking-tighter sm:text-5xl">What We Offer</p>
          </div>
          <div className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            <p className="text-justify">
              We provide tailored support for learners in Grades 9–12, as well as interventions in primary schools through our AI and storytelling programmes.<br/><br/>
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
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container grid items-start justify-center gap-6 px-4 md:gap-10 lg:grid-cols-2 lg:px-6 xl:gap-16">
          <ServiceSection
            title="Career Counselling & Assessments"
            description="Personalised career counselling and scientifically validated assessments to help learners understand their strengths, interests, and aptitudes."
            imageSrc="./service1.jpg"
          />
          <ServiceSection
            title="Subject & Degree Guidance"
            description="Expert advice on subject selection (Grades 9–10) and degree/career pathway choices (Grades 11–12), ensuring alignment with learners’ goals and the world of work."
            imageSrc="./service2.jpg"
          />
          <ServiceSection
            title="Personality & Aptitude Profiling"
            description="Comprehensive profiling to help learners discover their unique personality styles and aptitudes, supporting informed career decisions."
            imageSrc="./service3.jpg"
          />
          <ServiceSection
            title="Industry Visits, Guest Speakers & Workshops"
            description="Real-world exposure through industry visits, guest speakers, and interactive workshops, connecting learners with professionals and career opportunities."
            imageSrc="./services.jpg"
          />
          <ServiceSection
            title="Internship & Tertiary Preparation Support"
            description="Support for learners transitioning to tertiary education or internships, including application guidance, interview preparation, and career psychology support."
            imageSrc="./service4.jpg"
          />
          <ServiceSection
            title="Educator & Parent Training"
            description="Workshops and resources for educators and parents to effectively support learners’ career development journeys."
            imageSrc="./about.jpg"
          />
        </div>
      </section>
    </>
  );
}


interface Service{
  title:string,
  description:string,
  imageSrc:string
}
function ServiceSection({ title, description, imageSrc }:Service) {
  return (
    <div className="grid gap-4 text-center lg:items-center lg:justify-center lg:text-left">
      <img alt={title} src={imageSrc} className="mx-auto w-full rounded-lg object-cover" />
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-500 text-justify dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
