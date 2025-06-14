import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us - Unique English Secondary School",
  description:
    "Learn about Unique English Secondary School, our mission, vision, values, and the dedicated team behind our success.",
  openGraph: {
    title: "About Us - Unique English Secondary School",
    description:
      "Learn about Unique English Secondary School, our mission, vision, values, and the dedicated team behind our success.",
    url: "https://uniqueebs.edu.np/about",
    siteName: "Unique English Secondary School",
    images: [
      {
        url: "https://uniqueebs.edu.np/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Unique English Secondary School",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1d3c78] py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              About Unique
            </h1>
            <p className="text-lg text-gray-200">
              Learn about our history, mission, values, and the dedicated team
              behind Unique English Secondary School.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1d3c78]">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2061, Unique English Secondary School began with a
                  vision to provide quality education to children in our
                  community. What started as a small institution with just 20
                  students has now grown into a respected educational
                  establishment serving over 300 students.
                </p>
                <p>
                  Our journey has been marked by a commitment to academic
                  excellence, character development, and community service. We
                  believe in nurturing not just intelligent minds, but
                  compassionate hearts.
                </p>
                <p>
                  Over the years, we have continuously evolved our teaching
                  methodologies and campus facilities to create an optimal
                  learning environment for our students.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/story.jpg"
                alt="School history"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1d3c78]">
              Our Mission & Vision
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-[#1d3c78]">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide a nurturing educational environment that inspires
                academic excellence, fosters personal growth, and cultivates
                responsible citizenship. We are committed to empowering students
                with knowledge, skills, and values that prepare them for future
                challenges.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-[#1d3c78]">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be recognized as a leading educational institution in Nepal,
                known for producing well-rounded individuals who contribute
                positively to society. We envision a learning community where
                curiosity is encouraged, diversity is celebrated, and every
                student reaches their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1d3c78]">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at Nepal School.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Excellence",
                desc: "Striving for the highest standards in all endeavors",
              },
              {
                title: "Integrity",
                desc: "Acting with honesty, ethics, and transparency",
              },
              {
                title: "Respect",
                desc: "Valuing diversity and treating everyone with dignity",
              },
              {
                title: "Responsibility",
                desc: "Taking ownership of actions and their consequences",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-full bg-[#1d3c78]/10 p-4">
                  <CheckCircle className="h-8 w-8 text-[#1d3c78]" />
                </div>
                <h3 className="mb-2 text-xl font-medium">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1d3c78]">
              Our Leadership Team
            </h2>
            <p className="text-muted-foreground">
              Meet the dedicated professionals guiding our institution.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Rajesh Sharma",
                role: "Principal",
                bio: "With over 20 years of experience in education, Mr. Sharma leads our school with vision and dedication.",
              },
              {
                name: "Sunita Thapa",
                role: "Vice Principal",
                bio: "Ms. Thapa oversees academic programs and ensures educational excellence across all grades.",
              },
              {
                name: "Binod Adhikari",
                role: "Administrative Director",
                bio: "Mr. Adhikari manages the operational aspects of our school with efficiency and care.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&text=${
                      member.name.split(" ")[0][0]
                    }${member.name.split(" ")[1][0]}`}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-medium">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-[#1d3c78]">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1d3c78]">
              Our Facilities
            </h2>
            <p className="text-muted-foreground">
              We provide modern facilities to enhance the learning experience of
              our students.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern Classrooms",
                desc: "Spacious, well-lit classrooms equipped with modern teaching aids",
              },
              {
                title: "Science Laboratory",
                desc: "Fully equipped lab for practical learning and experiments",
              },
              {
                title: "Computer Lab",
                desc: "State-of-the-art computers with high-speed internet access",
              },
              {
                title: "Library",
                desc: "Extensive collection of books, journals, and digital resources",
              },
              {
                title: "Sports Ground",
                desc: "Large playground for various outdoor sports and activities",
              },
              {
                title: "Art & Music Room",
                desc: "Dedicated space for creative expression and cultural activities",
              },
            ].map((facility, index) => (
              <div key={index} className="rounded-lg border p-6">
                <h3 className="mb-2 text-xl font-medium text-[#1d3c78]">
                  {facility.title}
                </h3>
                <p className="text-sm text-muted-foreground">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
