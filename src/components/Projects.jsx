import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="annotation mb-24">
           <span className="w-8 h-px bg-accent" /> Selected Works & Artifacts
        </div>

        <div>
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
