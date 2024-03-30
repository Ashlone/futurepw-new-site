export default function Component() {
  return (
    <div className="relative bg-black-50 py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-3xl gap-10 mx-auto items-center space-y-10 lg:gap-16">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              About Us
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Get to know us.</p>
            <img
              alt="About Us"
              className="mx-auto rounded-xl object-cover object-center sm:w-full lg:w-auto"
              src="./about.jpg"
            />
          </div>
          <div className="grid gap-4 sm:gap-8 lg:gap-12">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Who are we</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Future Pathways, a registered NPC, stands at the forefront of a
                critical mission to tackle youth unemployment in South Africa
                with unwavering dedication. We understand that true change goes
                beyond traditional career guidance; it embodies the core
                principle of social justice. To reduce youth unemployment, we
                believe in constructing an equitable system, where high school
                learners of all backgrounds have equal opportunities. Our focus
                is on leveling the playing field, and eliminating the stifling
                impact of socioeconomic disparities on potential. By arming high
                school learners with knowledge and skills for informed career
                decisions, we empower them to overcome systemic barriers and
                transition seamlessly into higher education and the world of
                work. We are dedicated to leveling the playing field, ensuring
                that no one's potential is hindered due to socioeconomic
                disparities. Social justice isn't a buzzword; it's the bedrock
                of our career development approach, shaping a more inclusive and
                equitable future for South Africa's youth. Your support can
                drive this vision.
              </p>
            </div>
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We strive to highlight the importance of career awareness and
                education within the South African context.
              </p>
            </div>
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Vision</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our vision is to combat youth unemployment through career
                guidance and support.
              </p>
            </div>
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Our values</h2>
              <ul className="text-gray-500 dark:text-gray-400 list-disc pl-6">
                <li>
                  Continuous Development: We are always learning, adapting, and
                  evolving to ensure that we provide the most effective and
                  relevant support to high school learners.
                </li>
                <li>
                  Passion: We believe that passion is the driving force behind
                  our commitment to creating a brighter future for the next
                  generation.
                </li>
                <li>
                  Social Change: We are devoted to building a society where
                  every youth has equal access to opportunities.
                </li>
                <li>
                  Diversity: We understand that every individual is unique, with
                  their own dreams, challenges, and strengths. By focusing on
                  each person’s strengths and capabilities, we ensure attention
                  is given tailored to the individual.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 space-y-6 text-center md:space-y-10 lg:space-y-14 lg:grid lg:gap-6 lg:grid-cols-2 lg:items-center lg:text-left xl:gap-10">
            <div className="space-y-4 lg:order-2 xl:space-y-6">
              <div className="space-y-2">
                <div className="inline">Meet the team</div>
                <p className="text-gray-500 dark:text-gray-400">
                  Our dedicated team is committed to guiding high school
                  learners through their career journeys, ensuring they are
                  well-prepared for the future. Our team includes:
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:gap-4 xl:gap-6">
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">Dean Mazhawidza</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Founder, Programme Director &amp; Career Development
                    Strategist
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Alice is the visionary behind our company. She is passionate
                    about creating innovative solutions that help our customers
                    succeed.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">Phelo Sifile</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Co-Founder &amp; Assistant Programme Director
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Bob is a creative marketer with a knack for storytelling. He
                    leads our marketing team with enthusiasm and expertise.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">DR Nina Barnes</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Qualified Industrial Psychologist, Board Member &amp;
                    Facilitator
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Eva is dedicated to ensuring our customers are happy. She is
                    always ready to go the extra mile to solve their problems.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">DR Rubina Setlhare</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Senior Lecturer Department of Education (UWC), Board Member,
                    Qualified Educational Psychologist &amp; Facilitator
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Max is a coding wizard who turns ideas into reality. He
                    leads our development team with skill and precision.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">DR Tapiwa Chipunza</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                  Board Member &amp; Researcher
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Max is a coding wizard who turns ideas into reality. He
                    leads our development team with skill and precision.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">Amanda Glaeser</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                  Board Member, Qualified Industrial Psychologist &amp; Facilitator
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Max is a coding wizard who turns ideas into reality. He
                    leads our development team with skill and precision.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">Dintle Tshwaragano</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                  Board Member, Treasurer &amp; Career Content Creator
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Max is a coding wizard who turns ideas into reality. He
                    leads our development team with skill and precision.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="font-semibold">Dr Toni Sylvester</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                  Lecturer, Board Member, Qualified Educational Psychologist &amp; Facilitator
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Max is a coding wizard who turns ideas into reality. He
                    leads our development team with skill and precision.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-[400px] items-center gap-4 lg:max-w-[500px] lg:order-1">
              <img
                alt="Dean"
                className="rounded-lg object-cover"
                height="500"
                src="dean.jpg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width="400"
              />
              <img
                alt="Bob Johnson"
                className="rounded-lg object-cover"
                height="500"
                src="./dean.jpg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width="400"
              />
              <img
                alt="Eva Williams"
                className="rounded-lg object-cover"
                height="500"
                src="./dean.jpg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width="400"
              />
              <img
                alt="Max Brown"
                className="rounded-lg object-cover"
                height="500"
                src="./dean.jpg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
