import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

function Project () {
  return (
    <div className="w-full h-full">
      <h1 className="text-center text-5xl p-10 w-full font-bold gradient-text mt-40" id="projects">
      Projects
      </h1>
      <section className="flex justify-center  gap-8 mt-16 flex-wrap">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            language={project.language}
            description={project.description}
            repository={project.repository}
            image={project.image}
          />
        ))}

      </section>
    </div>
  )
}

export default Project;