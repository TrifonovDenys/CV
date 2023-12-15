import Title from '../Title/Title';
import ProjectItem from './ProjectItem';

import projects from '../../data/projects';
const Projects = () => {
  return (
    <section className='py-12'>
      <Title title={'my projects'} />
      <ul className='flex flex-wrap flex-row-reverse'>
        {projects.map((project, index) => (
          <ProjectItem project={project} key={index} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
