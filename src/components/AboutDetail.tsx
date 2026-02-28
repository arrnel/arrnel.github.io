import React from "react";

const AboutDetail: React.FC<{ icon: string, title: string, description: string }> = ({icon, title, description}) => {

    return (
        <div className="details-container">
            <img src={icon} alt="Experience icon" className="icon"/>
            <h3>{title}</h3>
            <p data-translate="about.experience.description">{description}</p>
        </div>
    );
}

export default AboutDetail;