// src/utils/placeholderData.js
export const placeholderData = {
    personalInfo: {
        name: "Your Name",
        email: "email@example.com",
        phone: "000-000-0000",
        address: "Your Address",
    },
    profSummary: { 
        summary: "Your professional summary goes here..." 
    },
    skillInfo: [
        { 
            skillCategory: "Category", 
            skillName: "Skill", 
            isEditing: false 
        }
    ],
    educationInfo: {
        school: "School Name",
        location: "City, Country",
        degree: "Degree",
        startDate: "YYYY",
        endDate: "YYYY",
    },
    experienceInfo: [
        {
            position: "Position",
            company: "Company",
            companyLoc: "Location",
            period: "Start - End",
            roles: ["Role description"],
            inputRole: "",
        },
    ],
    projectInfo: [
        {
            projectName: "Project Name", 
            projectDef: ["Project description"], 
            inputDef: "" 
        },
    ],
};
