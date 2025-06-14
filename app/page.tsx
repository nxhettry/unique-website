import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  Star,
  Heart,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 gradient-primary animate-gradient"></div>

        {/* Floating particles */}
        <div className="particles">
          <div
            className="particle w-2 h-2 top-1/4 left-1/4 animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="particle w-3 h-3 top-1/3 right-1/4 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="particle w-1 h-1 top-1/2 left-1/3 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="particle w-2 h-2 bottom-1/4 right-1/3 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="particle w-1 h-1 top-3/4 left-1/2 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/10 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-accent-400/20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-16 h-16 rotate-45 bg-success-400/20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 glass text-sm font-medium">
                  <Star className="w-4 h-4 mr-2 text-yellow-300" />
                  Excellence in Education Since 2005
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Shaping the
                  <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text animate-gradient">
                    Future
                  </span>
                  of Nepal
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Providing world-class education and nurturing young minds to
                  become tomorrow{"'"}s innovative leaders and changemakers.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 hover:scale-105 hover-lift px-8 py-6 text-lg font-semibold rounded-full"
                >
                  <Link href="/about" className="flex items-center">
                    Discover More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:scale-105 hover-lift px-8 py-6 text-lg font-semibold rounded-full glass"
                >
                  <Link href="/contact" className="flex items-center">
                    <Heart className="mr-2 h-5 w-5" /> Join Our Family
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div
                  className="text-center animate-bounce-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-3xl font-bold text-yellow-300">500+</div>
                  <div className="text-sm text-gray-300">Happy Students</div>
                </div>
                <div
                  className="text-center animate-bounce-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl font-bold text-green-300">50+</div>
                  <div className="text-sm text-gray-300">Expert Teachers</div>
                </div>
                <div
                  className="text-center animate-bounce-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="text-3xl font-bold text-blue-300">18+</div>
                  <div className="text-sm text-gray-300">Years Excellence</div>
                </div>
              </div>
            </div>

            <div
              className="relative animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-success-400 rounded-3xl rotate-6 animate-pulse-glow"></div>
                <div className="relative bg-white rounded-3xl p-2 hover-lift">
                  <Image
                    src="/placeholder.svg?height=600&width=500&text=Happy Students"
                    alt="Happy students at Nepal School"
                    width={500}
                    height={600}
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-4 animate-float hover-glow">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-pink-400 rounded-full p-4 animate-float hover-glow"
                style={{ animationDelay: "1s" }}
              >
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our school offers a unique learning environment focused on
              academic excellence, personal growth, and character development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: "Quality Education",
                desc: "Comprehensive curriculum designed to foster academic excellence and critical thinking.",
                color: "from-blue-500 to-purple-600",
                delay: "0s",
              },
              {
                icon: GraduationCap,
                title: "Skilled Faculty",
                desc: "Experienced teachers dedicated to nurturing each student's potential.",
                color: "from-green-500 to-teal-600",
                delay: "0.1s",
              },
              {
                icon: Users,
                title: "Small Class Sizes",
                desc: "Personalized attention ensuring every student receives the support they need.",
                color: "from-orange-500 to-red-600",
                delay: "0.2s",
              },
              {
                icon: Award,
                title: "Extracurricular",
                desc: "Diverse activities promoting holistic development beyond academics.",
                color: "from-pink-500 to-rose-600",
                delay: "0.3s",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group hover-lift bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: feature.delay }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-600 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              News & Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the exciting happenings and achievements at our
              vibrant school community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Annual Sports Day",
                desc: "Students showcase their athletic abilities in various sports competitions and team activities.",
                date: "June 15, 2024",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Science Exhibition",
                desc: "Innovative projects and experiments displayed by students from all grades.",
                date: "June 20, 2024",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Cultural Program",
                desc: "Celebrating the rich cultural heritage of Nepal through performances and art.",
                date: "June 25, 2024",
                color: "from-purple-500 to-pink-500",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="group hover-lift bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-90`}
                  ></div>
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Event ${
                      index + 1
                    }`}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.desc}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group-hover:translate-x-2 transition-all duration-300"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-success-100 text-success-600 text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Parent Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the parents of our students about their amazing
              experience with our school community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sita Sharma",
                role: "Parent of Grade 5 Student",
                text: "The teachers are incredibly dedicated and my child has shown remarkable improvement in both academics and confidence.",
                rating: 5,
              },
              {
                name: "Ram Thapa",
                role: "Parent of Grade 7 Student",
                text: "We appreciate the individual attention given to each student. The school truly cares about holistic development.",
                rating: 5,
              },
              {
                name: "Maya Gurung",
                role: "Parent of Grade 3 Student",
                text: "The school's focus on both traditional values and modern education creates a perfect learning environment.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group hover-lift bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 p-0.5">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary-600">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  {'"'}
                  {testimonial.text}
                  {'"'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="particles">
          <div className="particle w-3 h-3 top-1/4 left-1/4 animate-float"></div>
          <div
            className="particle w-2 h-2 top-1/3 right-1/4 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="particle w-1 h-1 bottom-1/4 right-1/3 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center text-white animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 glass text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Join Our Community
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Join Our
              <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text">
                Amazing School?
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              We{"'"}re currently accepting applications for the upcoming
              academic year. Contact us to learn more about our admission
              process and become part of our family.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 hover:scale-105 hover-lift px-12 py-6 text-xl font-bold rounded-full"
            >
              <Link href="/contact" className="flex items-center">
                <Heart className="mr-3 h-6 w-6" />
                Contact Us Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
