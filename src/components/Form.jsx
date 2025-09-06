import { useState } from 'react';
import ProfSummary from './SummarySection';
import PersonalInfoForm from './PersonalSection'
import EducationInfoForm from './EducationSection'
import ExperienceInfoForm from './ExperienceSection'
import SkillSection from './SkillSection';
import ProjectSection from './ProjectSection';

const Form = ({
    formData, 
    // setFormData,
    updateSummary,
    updatePersonalInfo,
    updateSkillInfo,
    updateEducationInfo,
    updateExperienceInfo,
    updateProjectInfo,
    isPreviewOpen,
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
    deleteProjectDef}) => {

    const [openSections, setOpenSections] = useState({
        personalInfo: false,
        profSummary: false,
        skillInfo: false,
        educationInfo: false,
        experienceInfo: false,
        projectInfo: false
    });
    
    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section] : !prev[section]
        }))
    }

    return (

        <div className='flex justify-center w-full'>
            <form className={`${isPreviewOpen ? "w-full" : "w-1/2"} flex flex-col gap-2 px-4`}>

                {/* Personal Information Section */}
                <section className="bg-white border-lime-900 rounded-lg p-6 mb-4 border-3 border-gray-700 w-full max-w-2xl mt-4 mx-auto shadow-md"> 
                    <div className='flex items-center justify-between'> 
                        <h2 className="text-stone-800 font-bold text-xl">Personal Information</h2>
                        <button type="button"
                            onClick={() => toggleSection('personalInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSections.personalInfo ? '▲' : '▼'}
                        </button>
                    </div>
                    {openSections.personalInfo && (
                        <PersonalInfoForm 
                            personalInfo={formData.personalInfo} 
                            onChange={updatePersonalInfo}
                        />
                    )}
                </section>

                {/* Professional Summary Section */}
                <section className="bg-white border-lime-900 rounded-lg p-6 mb-4 border-3 border-gray-700 w-full max-w-2xl mt-4 mx-auto shadow-md"> 
                    <div className='flex items-center justify-between'> 
                        <h2 className="text-stone-800 font-bold text-xl"> Professional Summary</h2>
                        <button type="button"
                            onClick={() => toggleSection('profSummary')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSections.profSummary ? '▲' : '▼'}
                        </button>
                    </div>

                    {openSections.profSummary && (
                        <ProfSummary 
                            profSummary={formData.profSummary} 
                            onChange={updateSummary}
                        />
                    )}
                </section>
                
                {/* Skills Section */}

                <section className="bg-white border-lime-900 rounded-lg p-6 mb-4 border-3 border-gray-700 w-full max-w-2xl mt-4 mx-auto shadow-md">
                    <div className='flex items-center justify-between'>
                        <h2 className="text-stone-800 font-bold text-xl">Skills</h2>
                        <button type="button"
                            onClick={() => toggleSection('skillInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSections.skillInfo ? '▲' : '▼'}
                        </button>
                    </div>

                    {openSections.skillInfo && (
                        <SkillSection 
                            skillInfo={formData.skillInfo} 
                            onChange={updateSkillInfo}
                            addSkill={addSkill}
                            deleteSkill={deleteSkill}
                            toggleEditSkill={toggleEditSkill}
                        />
                    )}
                </section>

                {/* Education Section  */}

                <section className="bg-white border-lime-900 rounded-lg p-6 mb-4 border-3 border-gray-700 w-full max-w-2xl mt-4 mx-auto shadow-md"> 
                    <div className='flex items-center justify-between'> 
                        <h2 className="text-stone-800 font-bold text-xl"> Education </h2>
                        <button type="button"
                            onClick={() => toggleSection('educationInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSections.educationInfo ? '▲' : '▼'}
                        </button>
                    </div>
                    {openSections.educationInfo &&
                        <EducationInfoForm 
                            educationInfo={formData.educationInfo} 
                            onChange={updateEducationInfo}
                        />
                    }
                </section>   

                {/* Experience Section  */}
                <section className="bg-white border-lime-900 rounded-lg p-6 mb-4 border-3 border-gray-700 w-full max-w-2xl mt-4 mx-auto shadow-md">
                    <div className='flex items-center justify-between'>
                        <h2 className="text-stone-800 font-bold text-xl"> Work Experience </h2>
                        <button type="button"
                            onClick={() => toggleSection('experienceInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSections.experienceInfo ? '▲' : '▼'} 
                        </button>
                    </div>
                    {openSections.experienceInfo && (
                        <div>
                            {formData.experienceInfo.map((exp, index) => (
                                <div key={index} className="gap-2 rounded flex flex-col"> 
                                    <ExperienceInfoForm 
                                    key={index}
                                    experienceInfo={exp}  // just one experience
                                    expIndex={index} // to know which one to update
                                    updateExperienceInfo={updateExperienceInfo} 
                                    addRole={addRole}
                                    deleteRole={deleteRole}
                                    addExperience={addExperience}
                                    deleteExperience={deleteExperience}/>
                                    <button type="button"
                                        onClick={() => deleteExperience(index)}
                                        className="mt-2 px-4 py-2 bg-red-500 text-stone-800 rounded hover:bg-red-600 transition">
                                        Delete Experience
                                    </button>
                                </div>
                            ))}
                            <button type="button"
                                onClick={addExperience}
                                className="px-4 py-2 rounded bg-lime-900 text-stone-100 hover:bg-lime-600 transition w-full mt-4">
                                Add Experience
                            </button>
                        </div>
                    )}
                </section>

                {/* Project Section */}
                <section className="bg-white border-lime-900 rounded-lg p-6 mb-4 border-3 border-gray-700 w-full max-w-2xl mt-4 mx-auto shadow-md">
                    <div className='flex items-center justify-between'>
                        <h2 className="text-stone-800 font-bold text-xl"> Projects </h2>
                        <button type="button"
                            onClick={() => toggleSection('projectInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSections.projectInfo ? '▲' : '▼'} 
                        </button>
                    </div>
                    {openSections.projectInfo && (
                        <div className="gap-2 rounded flex flex-col">
                            {formData.projectInfo.map((proj, index) => (
                                <div key={index} className="gap-2 rounded flex flex-col"> 
                                    <ProjectSection
                                        projectInfo={proj} // just one experience
                                        projIndex={index} // to know which one to update
                                        updateProjectInfo={updateProjectInfo}
                                        addProjectDef={() => addProjectDef(index)}
                                        deleteProjectDef={(defIndex) => deleteProjectDef(index, defIndex)}
                                    />  
                                    <button type="button"
                                        onClick={() => deleteProject(index)}
                                        className="mt-2 px-4 py-2 w-full bg-red-500 text-stone-800 rounded hover:bg-red-600 transition">
                                        Delete Project
                                    </button>
                                </div>
                            ))}

                            <button type="button"
                                onClick={addProject}
                                className="px-4 py-2 rounded bg-lime-900 text-stone-100 hover:bg-lime-600 transition w-full mt-2">
                                Add Project
                            </button>
                        </div>
                    )}
                </section>
            </form>
        </div>
      );
}

export default Form;