import ProjectCardComponent from '../card/ProjectCardComponent.tsx';
import type {Project} from '../../model/Project.ts';
import styles from './ProjectsSectionContent.module.css'

const ProjectsSectionContent: React.FC<{
    projects: Project[];
}> = ({projects}) => {
    return (
        <div className={`sectionContentContainer ${styles.projectsSectionContentContainer}`}>
            {
                projects.map((project) => (
                    <ProjectCardComponent
                        key={project.id}
                        project={project}
                    />
                ))
            }
        </div>
    );
};

export default ProjectsSectionContent;