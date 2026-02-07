import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Bais City Information Hub: An Integrated Local Services Platform (Ongoing Project)",
    description:
      "The Bais City Information Hub is an integrated web-based platform designed to provide residents and visitors with easy access to local government services, announcements, and resources. The system aims to centralize information, streamline service requests, and enhance communication between the local government and the community.",
    image: "/projects/project7.jpeg",
    tags: ["JQuery", "PHP", "SQL", "Google API", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Booking System",
    description:
      "A Booking System is a software application that was developed as our capstone project, designed to handle online reservations, manage schedules and availability, and store customer information. The system aimed to improve efficiency, reduce manual booking processes, and provide a more organized and convenient reservation experience.",
    image: "/projects/project5.png",
    tags: ["JavaScript", "JQuery", "PHP", "SQL", "Google API", "Tailwind CSS"],
    link: "https://github.com/JunzFundz/cugon",
    github: "https://github.com/JunzFundz/cugon",
  },
  {
    title: "Accomodation Locatior System",
    description:
      "An Accommodation Locator System is a web-based system designed to help users search and view available boarding houses, lodgings, and hotels. It allows users to browse locations, view details, and compare accommodations, but does not support room booking. The system was developed as a capstone project for one of my clients, focusing on providing an easy and efficient way to locate accommodations.",
    image: "/projects/project6.png",
    tags: [
      "JavaScript",
      "JQuery",
      "PHP",
      "SQL",
      "Google API",
      "Tailwind CSS",
      "Flowbite",
    ],
    link: "https://github.com/JunzFundz/Accommodation_Locator/tree/v7",
    github: "https://github.com/JunzFundz/Accommodation_Locator/tree/v7",
  },
  {
    title: "Pharmacy Inventory System",
    description:
      "This is also one of the capstone projects: a Pharmacy Inventory System, a software solution designed to efficiently manage and monitor medicines and medical supplies within a pharmacy. The system enables real-time tracking of stock levels, expiration dates, sales, and reordering needs, ensuring that medications are always available, safe for dispensing, and accurately recorded.",
    image: "/projects/project1.png",
    tags: ["JavaScript", "PHP", "SQL", "Bootstrap"],
    link: "https://github.com/JunzFundz/pharmacy?tab=readme-ov-file",
    github: "https://github.com/JunzFundz/pharmacy?tab=readme-ov-file",
  },
  {
    title: "Pamplona Information System",
    description:
      "Pamplona Information System, a computerized system developed to store, manage, and print official documents such as certificates and records. It facilitates efficient data entry, rapid information retrieval, and accurate document printing, helping the municipality provide faster services, maintain organized records, and minimize paperwork.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "PHP", "SQL", "Bootstrap"],
    link: "https://github.com/JunzFundz/barangay",
    github: "https://github.com/JunzFundz/barangay",
  },
  {
    title: "Cadet Record Management System in NORSU Bais ROTC Unit",
    description:
      "A Cadet Record Management System for the NORSU Bais ROTC Unit is a digital system designed to store, manage, and organize cadet information such as personal details, attendance, ranks, training records, and performance. It helps ROTC officers efficiently monitor cadet progress, generate reports, and maintain accurate and secure records for effective unit administration.",
    image: "/projects/project3.png",
    tags: ["JavaScript", "JQuery", "PHP", "SQL", "Bootstrap"],
    link: "https://github.com/JunzFundz/studentrms/tree/V3",
    github: "https://github.com/JunzFundz/studentrms/tree/V3",
  },

  {
    title: "E-commerce website",
    description:
      "An E-commerce System is an online platform that allows businesses to sell products or services over the internet. It manages product listings, customer accounts, shopping carts, orders, and payments, providing a convenient, secure, and efficient way for customers to shop anytime and anywhere.",
    image: "/projects/project4.png",
    tags: ["JavaScript", "PDO", "SQL", "Google API", "Tailwind CSS"],
    link: "https://github.com/JunzFundz/project_ecommerce/tree/Version-3",
    github: "https://github.com/JunzFundz/project_ecommerce/tree/Version-3",
  },
];

export const Projects = () => {
  const [displayCount, setDisplayCount] = useState(4);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 2);
  };

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, displayCount).map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More CTA */}
        {displayCount < projects.length && (
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Load More Projects
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
