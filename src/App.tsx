import React from 'react';
import HeaderComponent from './components/section/HeaderComponent.tsx';
import {ThemeProvider} from './context/ThemeContext';
import AboutSectionContent from "./components/section/AboutSectionContent.tsx";
import ExperienceSectionContent from "./components/section/ExperienceSectionContent.tsx";
import ProjectsSectionContent from "./components/section/ProjectsSectionContent.tsx";
import ContactsSectionContent from "./components/section/ContactsSectionContent.tsx";
import FooterComponent from "./components/section/FooterComponent.tsx";
import {EXPERIENCES_DATA} from "./data/ExperienceData.ts";
import {PROJECTS_DATA} from "./data/ProjectData.ts";
import {CONTACTS_DATA} from "./data/ContactData.ts";
import {PROFILE_DATA} from "./data/ProfileData.ts";
import {ABOUT_DATA} from "./data/AboutData.ts";
import SectionTitleComponent from "./components/section/SectionTitleComponent.tsx";
import {useTranslation} from "react-i18next";
import ProfileSectionContent from "./components/section/ProfileSectionContent.tsx";
import {Section} from "./model/Section.ts";
import './i18n';

const App: React.FC = () => {

    const {t} = useTranslation();

    const headerNavSections = [Section.ABOUT, Section.EXPERIENCE, Section.PROJECTS, Section.CONTACTS];
    const footerNavSections = [Section.PROFILE, Section.ABOUT, Section.EXPERIENCE, Section.PROJECTS];

    return (
        <ThemeProvider>
            <div className="app">
                <HeaderComponent sections={headerNavSections}/>

                <main>
                    {/* === PROFILE === */}
                    <section id="profile" className="section profileSection">
                        <div className="sectionContentWrapper profileSectionContentWrapper">
                            <ProfileSectionContent profile={PROFILE_DATA}/>
                        </div>
                    </section>

                    {/* === ABOUT === */}
                    <section id="about" className="section aboutSection">
                        <div className="sectionTitleWrapper aboutSectionTitleWrapper">
                            <SectionTitleComponent
                                title={t('about.title')}
                                description={t('about.description')}
                            />
                        </div>
                        <div className="sectionContentWrapper aboutSectionContentWrapper">
                            <AboutSectionContent about={ABOUT_DATA}/>
                        </div>
                        <div className="sectionTitleDuplicator aboutSectionTitleDuplicator"/>
                    </section>

                    {/* === EXPERIENCE === */}
                    <section id="experience" className="section experienceSection">
                        <div className="sectionTitleWrapper experienceSectionTitleWrapper">
                            <SectionTitleComponent
                                title={t('experience.title')}
                                description={t('experience.description')}
                            />
                        </div>
                        <div className="sectionContentWrapper experienceSectionContentWrapper">
                            <ExperienceSectionContent experiences={EXPERIENCES_DATA}/>
                        </div>
                        <div className="sectionTitleDuplicator experienceSectionTitleDuplicator"/>
                    </section>

                    {/* === PROJECTS === */}
                    <section id="projects" className="section projectsSection">
                        <div className="sectionTitleWrapper projectsSectionTitleWrapper">
                            <SectionTitleComponent
                                title={t('projects.title')}
                                description={t('projects.description')}
                            />
                        </div>
                        <div className="sectionContentWrapper projectsSectionContentWrapper">
                            <ProjectsSectionContent projects={PROJECTS_DATA}/>
                        </div>
                        <div className="sectionTitleDuplicator projectsSectionTitleDuplicator"/>
                    </section>

                    {/* === CONTACTS === */}
                    <section id="contacts" className="section contactsSection">
                        <div className="sectionTitleWrapper contactsSectionTitleWrapper">
                            <SectionTitleComponent
                                title={t('contacts.title')}
                                description={t('contacts.description')}
                            />
                        </div>
                        <div className="sectionContentWrapper contactsSectionContentWrapper">
                            <ContactsSectionContent contacts={CONTACTS_DATA}/>
                        </div>
                        <div className="sectionTitleDuplicator contactsSectionTitleDuplicator"/>
                    </section>

                    <FooterComponent sections={footerNavSections}/>
                </main>
            </div>
        </ThemeProvider>
    );
};

export default App;