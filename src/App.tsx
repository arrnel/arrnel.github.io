import React, { useEffect } from 'react';
import './i18n';
import {useTranslation} from "react-i18next";
import {Section} from "./model/Section.ts";

import {EXPERIENCES_DATA} from "./data/ExperienceData.ts";
import {PROJECTS_DATA} from "./data/ProjectData.ts";
import {CONTACTS_DATA} from "./data/ContactData.ts";
import {PROFILE_DATA} from "./data/ProfileData.ts";
import {ABOUT_DATA} from "./data/AboutData.ts";

import HeaderComponent from './components/section/HeaderComponent.tsx';
import {ThemeProvider} from './context/ThemeContext';
import AboutSectionContent from "./components/section/AboutSectionContent.tsx";
import ExperienceSectionContent from "./components/section/ExperienceSectionContent.tsx";
import ProjectsSectionContent from "./components/section/ProjectsSectionContent.tsx";
import ContactsSectionContent from "./components/section/ContactsSectionContent.tsx";
import FooterComponent from "./components/section/FooterComponent.tsx";
import SectionTitleComponent from "./components/section/SectionTitleComponent.tsx";
import ProfileSectionContent from "./components/section/ProfileSectionContent.tsx";
import TrackedSection from "./components/section/TrackedSection.tsx";

const App: React.FC = () => {

    const {t} = useTranslation();

    const headerNavSections = [Section.ABOUT, Section.EXPERIENCE, Section.PROJECTS, Section.CONTACTS];
    const footerNavSections = [Section.PROFILE, Section.ABOUT, Section.EXPERIENCE, Section.PROJECTS];

    const useDocumentTitle = (title: string) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };

    useDocumentTitle(t("page.title.global"));

    return (
        <ThemeProvider>
            <div className="app">
                <HeaderComponent sections={headerNavSections}/>

                <main>
                    {/* === PROFILE === */}
                    <TrackedSection id={Section.PROFILE} className="section profileSection">
                        <div className="sectionContentWrapper profileSectionContentWrapper">
                            <ProfileSectionContent profile={PROFILE_DATA}/>
                        </div>
                    </TrackedSection>

                    {/* === ABOUT === */}
                    <TrackedSection id={Section.ABOUT} className="section aboutSection">
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
                    </TrackedSection>

                    {/* === EXPERIENCE === */}
                    <TrackedSection id={Section.EXPERIENCE} className="section experienceSection">
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
                    </TrackedSection>

                    {/* === PROJECTS === */}
                    <TrackedSection id={Section.PROJECTS} className="section projectsSection">
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
                    </TrackedSection>

                    {/* === CONTACTS === */}
                    <TrackedSection id={Section.CONTACTS} className="section contactsSection">
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
                    </TrackedSection>

                    <FooterComponent sections={footerNavSections}/>
                </main>
            </div>
        </ThemeProvider>
    );
};

export default App;