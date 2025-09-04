import {useState} from "react"

function useFormData() {
    const [formData, setFormData] =useState({
            profSummary: {
                summary: ""
            },
            personalInfo: {
                name: "",
                address: "",
                email: "",
                phone: ""
            },
            educationInfo: {
                school: "",
                location: "",
                degree: "",
                startDate: "",
                endDate: ""
            },
            experienceInfo: [{
                position: "",
                company: "",
                period: "",
                companyLoc: "",
                roles: [],
                inputRole: ""
            }],
            skillInfo: [{
                skillCategory: "",
                skillName: "",
                isEditing: true
            }],
            projectInfo: [{
                projectName: "",
                projectDef: [], 
                inputDef: ""
            }]
        })

        const updateSummary = (e) => {
        setFormData({
            ...formData, profSummary: {
                ...formData.profSummary, [e.target.name] : e.target.value
            }})
    }

    const updatePersonalInfo = (e) => {
        setFormData({
            ...formData, personalInfo: {
                ...formData.personalInfo, [e.target.name] : e.target.value
            }})
    }

    const updateSkillInfo = (index, field, value) => {
        const updatedSkills = [...formData.skillInfo];
        updatedSkills[index] = {
            ...updatedSkills[index],
            [field]:value
        };
        setFormData({...formData, skillInfo: updatedSkills})
    }

    const updateEducationInfo = (e) => {
        setFormData({
            ...formData, educationInfo: {
                ...formData.educationInfo, [e.target.name] : e.target.value
            }})
    }

    const updateExperienceInfo = (e, expIndex) => {
        const {name, value} = e.target;

        setFormData((prev) => {
            const updatedExperiences = [...prev.experienceInfo];
            updatedExperiences[expIndex] = {...updatedExperiences[expIndex], [name]: value} 

            return {
                ...prev, experienceInfo: updatedExperiences
            }
        })  
    }

    // Add role to the correct experience
    const addRole = (expIndex) => {
        setFormData(prev => {
            const updatedExperiences = [...prev.experienceInfo];
            const exp = updatedExperiences[expIndex]

            if (exp.inputRole?.trim()) {
                exp.roles = [...(exp.roles || []), exp.inputRole.trim()]
                exp.inputRole = "" // Clear input after adding
            }

            return {
                ...prev, 
                experienceInfo: updatedExperiences
            }
        })
    }
    
    // Delete role from the correct experience
    const deleteRole = (expIndex, roleIndex) => {
        setFormData(prev => {
            const updatedExperiences = [...prev.experienceInfo];

            updatedExperiences[expIndex].roles = updatedExperiences[expIndex].roles.filter(
                (_, i) => i !== roleIndex
            )
        
            return {
                ...prev,
                experienceInfo: updatedExperiences
            }
        })
    }

    const addExperience = () => {
        setFormData((prev) => ({
            ...prev,
            experienceInfo: [
                ...prev.experienceInfo,
                {
                    position: "", 
                    company: "", 
                    period: "", 
                    companyLoc: "", 
                    roles: [], 
                    inputRole: ""}
            ]
        }))
    }

    const deleteExperience = (expIndex) => {
        setFormData(prev => ({
            ...prev, experienceInfo: prev.experienceInfo.filter((_, i) => i !== expIndex)
        }))
    }

    const addSkill = () => {
        setFormData((prev) => {
            // To make existing skills not editable
            const updatedSkills = prev.skillInfo.map(skill => 
            ({...skill, isEditing: false})
            )

            // Add new editable skill
            updatedSkills.push({
                skillCategory: "",
                skillName: "",
                isEditing: true
            })
            return {...prev, skillInfo: updatedSkills}
        })
    }

    const deleteSkill = (index) => {
        setFormData(prev => ({
            ...prev, skillInfo: prev.skillInfo.filter((_, i) => i !== index)
        }))
    }

    const toggleEditSkill = (index) => {
        setFormData((prev) => {
            const updatedSkills = prev.skillInfo.map((skill, i) => ({
                ...skill, 
                isEditing: i === index ? true : skill.isEditing
            }))
            return {...prev, skillInfo: updatedSkills}
        })
    }

    const updateProjectInfo = (e, projIndex) => {
        const {name, value} = e.target;

        setFormData((prev) => {
            const updatedProject = [...prev.projectInfo];
            updatedProject[projIndex] = {...updatedProject[projIndex], [name]: value} 

            return {
                ...prev, projectInfo: updatedProject
            }
        })  
    }

    const addProject = () => {
        setFormData((prev) => ({
            ...prev,
            projectInfo: [
                ...prev.projectInfo,
                {
                    projectName: "",
                    projectDef: [],
                    inputDef: ""
                }
            ]
        }))
    }

    const deleteProject = (projIndex) => {
        setFormData(prev => ({
            ...prev, projectInfo: prev.projectInfo.filter((_, i) => i !== projIndex)
        }))
    }

    // Add description to the correct project
    const addProjectDef = (projIndex) => {
        setFormData(prev => {
            const updatedProject = [...prev.projectInfo];
            const proj = updatedProject[projIndex]

            if (proj.inputDef?.trim()) {
                updatedProject[projIndex] = {
                    ...proj,
                    projectDef: [...(proj.projectDef || []), proj.inputDef.trim()],
                    inputDef: ""
                };
            }

            return {
                ...prev, 
                projectInfo: updatedProject
            }
        })
    }
    
    // Delete description to the correct project
    const deleteProjectDef = (projIndex, defIndex) => {
        setFormData(prev => {
            const updatedProject = [...prev.projectInfo];

            updatedProject[projIndex].projectDef = updatedProject[projIndex].projectDef.filter(
                (_, i) => i !== defIndex
            )
        
            return {
                ...prev,
                projectInfo: updatedProject
            }
        })
    }

    return {
        formData, 
        setFormData,
        updateSummary,
        updatePersonalInfo,
        updateSkillInfo,
        updateEducationInfo,
        updateExperienceInfo,
        updateProjectInfo,
        // isPreviewOpen,
        addRole,
        deleteRole,
        addSkill,
        deleteSkill,
        toggleEditSkill,
        addExperience,
        deleteExperience,
        addProject,
        deleteProject,
        addProjectDef,
        deleteProjectDef
    }
}

export default useFormData