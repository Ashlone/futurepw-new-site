
export default function Component() {
  return (
    <>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            
            <p className="text-3xl font-bold tracking-tighter sm:text-5xl">We help you succeed</p>
          </div>
          <img
              alt="About Us"
              className="mx-auto rounded-xl object-cover object-center sm:w-full lg:w-auto"
              src="./services.jpg"
            />
          <div className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            <p>
              Our team is dedicated to providing the best services to our customers. We offer a wide range of solutions
              to meet your needs. From consulting to implementation, we are here to help you succeed.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16">
        <div className="container grid items-start justify-center gap-6 px-4 md:gap-10 lg:grid-cols-2 lg:px-6 xl:gap-16">
          {/* Career Guidance and Support */}
          <div className="grid gap-4 text-center lg:items-center lg:justify-center lg:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Career Guidance and Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We provide expert guidance and support to help students make informed career choices. Our services include:
                Conducting assessments, one-on-one counselling sessions, career exploration, and goal setting.
              </p>
            </div>
          </div>
          {/* Grade 9-10 Subject Choices */}
          <div className="grid gap-4 text-center lg:items-center lg:justify-center lg:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Grade 9-10 Subject Choices</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We offer assistance in making the right subject choices to align with future career goals. Our services include:
                In-depth consultations, subject profiling, and insights into future career trends.
              </p>
            </div>
          </div>
          {/* Grade 11-12 Degree Choices */}
          <div className="grid gap-4 text-center lg:items-center lg:justify-center lg:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Grade 11-12 Degree Choices</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We provide guidance on selecting the right degree programs and educational pathways. Our services include:
                University and college research, course comparisons, and application assistance.
              </p>
            </div>
          </div>
          {/* Career Guidance for Higher Education Students */}
          <div className="grid gap-4 text-center lg:items-center lg:justify-center lg:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Career Guidance for Higher Education Students</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We offer support for learners pursuing higher education, including university and vocational training. Our services include:
                Scholarship information, internship opportunities, and networking support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


