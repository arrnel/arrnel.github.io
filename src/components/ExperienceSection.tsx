import { forwardRef } from 'react';
import { EXPERIENCES } from '../data/experiences';
import ExperienceItem from "./ExperienceItem.tsx";

const ExperienceSection = forwardRef<HTMLElement>((_, ref) => {

  return (
      <section ref={ref} className="section experience-section">
          <p className="section__text__p1" data-translate="experience.description">Изучи мои</p>
          <h1 className="title" data-translate="experience.title">Навыки</h1>
          <div className="experience-details-container">
              <div className="about-containers">
                  <ExperienceItem experience={EXPERIENCES[0]}></ExperienceItem>
                  <ExperienceItem experience={EXPERIENCES[1]}></ExperienceItem>
              </div>
          </div>
      </section>
  );
});

export default ExperienceSection;