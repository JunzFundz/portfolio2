import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const school = [
  {
    title: "2025 - PRESENT",
    description: "Master of Information Technology",
    campus: "State University of Northern Negros (Old Sagay)",
  },
  {
    title: "2020 - 2024",
    description: "Bachelor of Science in Information Technology",
    campus: "Negros Oriental State University",
  },
  {
    title: "2018 - 2020",
    description: "Technical Vocational Learning - Carpentry (TVL)",
    campus: "Manjuyod National High School",
  },
  {
    title: "2016 - 2017",
    description: "Alternative Learning System (ALS)",
    campus: "Manjuyod Elementary School",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Educational
              <span className="font-serif italic font-normal text-white">
                {" "}
                Background
              </span>
            </h2>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {school.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div> */}
                <h3 className="text-secondary-foreground text-lg font-semibold mb-2">{item.title}</h3>
                <h3 className="text-sm font-semibold mb-2">{item.campus}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center py-10">
          {/* Left Column */}
          <div className="space-y-8">

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the
              <span className="font-serif italic font-normal text-white">
                {" "}
                future.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate software engineer with 3 years of experience
                developing web applications and digital solutions that make an
                impact. My journey began with a curiosity about how websites and
                applications work, which has grown into strong expertise in PHP,
                SQL, and jQuery.
              </p>
              <p>
                I specialize in building dynamic, data-driven web applications,
                from interactive user interfaces to fully functional backend
                systems. My approach combines clean, efficient code with
                practical solutions that enhance performance, usability, and
                maintainability.
              </p>
              <p>
                I am also actively learning new technologies such as React,
                Next.js, and Node.js to expand my skill set and stay updated
                with modern web development trends.
              </p>
              <p>
                Outside of coding, I enjoy exploring new web technologies,
                improving my skills through projects, and sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
