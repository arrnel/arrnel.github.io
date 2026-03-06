import ProjectCardComponent from '../card/ProjectCardComponent.tsx';
import type {Project} from '../../model/Project.ts';
import styles from './ProjectsSectionContent.module.css'

const ProjectsSectionContent: React.FC<{
    projects: Project[];
}> = ({projects}) => {
    return (
        <div className={`sectionContentContainer ${styles.projectsSectionContentContainer}`}>
            {
                projects.map((project, idx) => (
                    <ProjectCardComponent
                        key={idx}
                        project={project}
                    />
                ))
            }
        </div>
    );
};

export default ProjectsSectionContent;