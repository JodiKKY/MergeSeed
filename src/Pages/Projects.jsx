// src/Pages/Projects.jsx
import React from "react";
import JobCard from "../components/ProjectCard.jsx";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";


const projects = [
  {
    image: project1,
    title: "Micro-Enterprise Loans",
    description:
      "This project focuses on providing affordable micro-credit to rural entrepreneurs, especially women and youth. It helps small business owners expand their operations, improve income stability, and build long-term financial independence. By removing financial barriers, MERGE Seed enables sustainable business growth and stronger community development.",
    tags: ["Microcredit", "Women Empowerment", "Youth Support"],
  },
  {
    image: project2,
    title: "Financial Literacy Program",
    description:
      "A comprehensive training program designed to educate entrepreneurs on budgeting, saving, record-keeping, and responsible borrowing. This initiative builds confidence in money management and ensures that loans are used effectively to grow profitable and resilient businesses.",
    tags: ["Training", "Education", "Financial Skills"],
  },
  {
    image: project3,
    title: "Agribusiness Support",
    description:
      "Supporting farmers and agribusiness owners with access to finance and advisory services. This project strengthens food security, increases productivity, and creates employment opportunities within rural agricultural communities.",
    tags: ["Agriculture", "Food Security", "Rural Growth"],
  },
  {
    image: project4,
    title: "Women in Business Initiative",
    description:
      "A targeted program that empowers women entrepreneurs through funding, mentorship, and business development support. It aims to close the gender financing gap and promote economic independence for women.",
    tags: ["Women", "Leadership", "Entrepreneurship"],
  },
  {
    image: project5,
    title: "Youth Enterprise Development",
    description:
      "Encouraging young people to embrace entrepreneurship by providing startup capital, business training, and mentorship. This initiative reduces unemployment and nurtures innovation in rural communities.",
    tags: ["Youth", "Innovation", "Startups"],
  },
  {
    image: project6,
    title: "Community Development Outreach",
    description:
      "Beyond finance, MERGE Seed invests in community development programs that support education, health awareness, and skills training. These activities strengthen social structures and promote holistic growth.",
    tags: ["Community", "Education", "Health"],
  },
];

const Projects = () => {
    
  return (
    <section className="min-h-screen bg-gray-100 py-24 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Project Gallery
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore our growing portfolio of impactful projects that are transforming
          rural communities through access to finance, education, and sustainable
          entrepreneurship. Each project represents a step toward financial inclusion
          and economic empowerment.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <JobCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
