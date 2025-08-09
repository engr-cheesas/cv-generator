import {useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form'; 
import CVPreview from './components/CVPreview';

function App () {

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

    const updateExperienceInfo = (e, expIndex, roleIndex=null) => {
        const {name, value} = e.target;

        setFormData((prev) => {
            const updatedExperiences = [...prev.experienceInfo];

            if (name === 'roles' && roleIndex !== null) {
                updatedExperiences[expIndex].roles[roleIndex] = value;
            } else {
                updatedExperiences[expIndex] = {
                    ...updatedExperiences[expIndex], 
                    [name]: value
                }
            }


            return {
                ...prev, experienceInfo: updatedExperiences
            }
        })  
    }

    const addRole = (expIndex) => {
        setFormData(prev => {
            const updatedExperiences = [...prev.experienceInfo];

            if (!updatedExperiences[expIndex]?.inputRole?.trim()) return prev;

            updatedExperiences[expIndex] = {
                ...updatedExperiences[expIndex],
                roles: [...updatedExperiences[expIndex].roles, updatedExperiences[expIndex].inputRole.trim()],
                inputRole: ""
            }

            return {
                ...prev, 
                experienceInfo: updatedExperiences
            }
        })
    }
    
    const deleteRole = (roleIndex, expIndex) => {
        setFormData(prev => {
            const updatedExperiences = [...prev.experienceInfo];

            updatedExperiences[expIndex] = {
                ...updatedExperiences[expIndex],
                roles: updatedExperiences[expIndex].roles.filter((_, i) => i !== roleIndex)
            }

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

    const [showPreview, setShowPreview] = useState(false);

    return ( 
        // Root container for the application
        <div className='flex flex-col'>
            <Navbar />
            <div className={`pt-15 flex min-h-screen ${showPreview ? 'justify-between' : 'justify-center'} bg-bubbles`}>
                {/* Form and CV Preview Panel */}
                <div className={`${showPreview ? 'w-1/2' : 'w-full'} transition-all`}>
                    {/* Form and Button  */}
                    <div className='flex flex-col gap-4 w-full'> 
                        <Form 
                        formData={formData} 
                        setFormData={setFormData}
                        onGenerate = {() => {setShowPreview(true)}}
                        updateSummary={updateSummary}
                        updatePersonalInfo={updatePersonalInfo}
                        updateEducationInfo={updateEducationInfo}
                        updateExperienceInfo={updateExperienceInfo}
                        updateSkillInfo={updateSkillInfo}
                        addSkill={addSkill}
                        deleteSkill={deleteSkill}
                        toggleEditSkill={toggleEditSkill}
                        isPreviewOpen={showPreview}
                        addRole={addRole}
                        deleteRole={deleteRole}
                        addExperience={addExperience}
                        deleteExperience={deleteExperience}
                    />

                    {!showPreview && (
                        <div className="flex justify-center"> 
                            <button type="button"
                            onClick={() => setShowPreview(true)}
                            className='bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors duration-300'>
                            Generate CV
                            </button>
                        </div>
                    )}
                    </div>
                </div>
                

                {showPreview && (
                    <div className='w-1/2 mx-auto bg-gray-100 p-4 rounded shadow-lg'>
                        {/* <p> CV Preview Panel </p> */}
                        <CVPreview formData={formData} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;