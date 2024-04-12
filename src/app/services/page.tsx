import Partner from "../components/partner";

export default function ServicesComponent() {
  return (
    <>
      <section className="mt-20 w-full py-6 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <p className="text-3xl  font-bold tracking-tighter sm:text-5xl">We help you succeed</p>
          </div>
          <div className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            <p className="text-justify">
              Our team is dedicated to providing the best services to our customers. We offer a wide range of solutions
              to meet your needs. From consulting to implementation, we are here to help you succeed.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container grid items-start justify-center gap-6 px-4 md:gap-10 lg:grid-cols-2 lg:px-6 xl:gap-16">
          {/* Career Guidance and Support */}
          <ServiceSection
            title="Career Guidance and Support"
            description="We provide expert guidance and support to help students make informed career choices. Our services include: conducting assessments, one-on-one counselling sessions, career exploration, and goal setting."
            imageSrc="./service1.jpg"
          />
          {/* Grade 9-10 Subject Choices */}
          <ServiceSection
            title="Grade 9-10 Subject Choices"
            description="We offer assistance in making the right subject choices to align with future career goals. Our services include: in-depth consultations, subject profiling, and insights into future career trends."
            imageSrc="./service2.jpg"
          />
          {/* Grade 11-12 Degree Choices */}
          <ServiceSection
            title="Grade 11-12 Degree Choices"
            description="We provide guidance on selecting the right degree programs and educational pathways. Our services include: university and college research, course comparisons, and application assistance."
            imageSrc="./service3.jpg"
          />
          {/* Career Guidance for Higher Education Students */}
          <ServiceSection
            title="Career Guidance for Higher Education Students"
            description="We offer support for learners pursuing higher education, including university and vocational training. Our services include: scholarship information, internship opportunities, and networking support."
            imageSrc="./service4.jpg"
          />
        </div>
      </section>
      <hr className="border-t-2 border-[#CA0101]" /> {/* Divider */}
        <Partner/>
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
