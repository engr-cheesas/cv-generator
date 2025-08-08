import { useState } from 'react';
import ProfSummary from './ProfSummary';
import PersonalInfoForm from './PersonalInfoForm'
import EducationInfoForm from './EducationInfoForm'
import ExperienceInfoForm from './ExperienceInfoForm'

const Form = ({
    formData, 
    // setFormData,
    updateSummary,
    updatePersonalInfo,
    updateEducationInfo,
    updateExperienceInfo,
    isPreviewOpen,
    addRole,
    deleteRole}) => {

    const [openSection, setOpenSection] = useState(null);
    
    const toggleSection = (section) => {
        setOpenSection((prev) => (prev === section ? null : section))
    }

    return (

        <div className='flex items-center justify-center'>
            <form className={`${isPreviewOpen ? "w-full" : "w-1/2"} flex flex-col gap-5`}>

                {/* Personal Information Section */}
                <section className="bg-electric-blue rounded-lg p-4 mb-4 border border-gray-700 w-full max-w-3xl mx-auto mt-4"> 
                    <div className='flex items-center justify-between'> 
                        <h2 className="text-white font-bold text-lg">Personal Information</h2>
                        <button type="button"
                            onClick={() => toggleSection('personalInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSection === 'personalInfo' ? '▲' : '▼'}
                        </button>
                    </div>
                    {openSection === 'personalInfo' && (
                        <PersonalInfoForm 
                            personalInfo={formData.personalInfo} 
                            onChange={updatePersonalInfo}
                        />
                    )}
                </section>

                {/* Professional Summary Section */}
                <section className="bg-electric-blue rounded-lg p-4 mb-4 border border-gray-700 w-full max-w-3xl mx-auto"> 
                    <div className='flex items-center justify-between'> 
                        <h2 className="text-white font-bold text-lg"> Professional Summary</h2>
                        <button type="button"
                            onClick={() => toggleSection('profSummary')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSection === 'profSummary' ? '▲' : '▼'}
                        </button>
                    </div>

                    {openSection === 'profSummary' && (
                        <ProfSummary 
                            profSummary={formData.profSummary} 
                            onChange={updateSummary}
                        />
                    )}
                </section>

                {/* Education Section  */}

                <section className="bg-electric-blue rounded-lg p-4 mb-4 border border-gray-700 w-full max-w-3xl mx-auto"> 
                    <div className='flex items-center justify-between'> 
                        <h2 className="text-white font-bold text-lg"> Education </h2>
                        <button type="button"
                            onClick={() => toggleSection('educationInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSection === 'educationInfo' ? '▲' : '▼'}
                        </button>
                    </div>
                    {openSection === 'educationInfo' &&
                        <EducationInfoForm 
                            educationInfo={formData.educationInfo} 
                            onChange={updateEducationInfo}
                        />
                    }
                </section>   

                {/* Experience Section  */}
                <section className="bg-electric-blue rounded-lg p-4 mb-4 border border-gray-700 w-full max-w-3xl mx-auto">
                    <div className='flex items-center justify-between'>
                        <h2 className="text-white font-bold text-lg"> Work Experience </h2>
                        <button type="button"
                            onClick={() => toggleSection('experienceInfo')}
                            className="flex text-lg font-semibold text-gray-700 bg-white rounded px-3 py-2 flex items-center justify-center">
                                {openSection === 'experienceInfo' ? '▲' : '▼'} 
                        </button>
                    </div>
                    {openSection === 'experienceInfo' && (
                        <ExperienceInfoForm 
                        experienceInfo={formData.experienceInfo} 
                        onChange={updateExperienceInfo}
                        addRole={addRole}
                        deleteRole={deleteRole}
                        />
                    )}
                </section>
            </form>
        </div>
      );
}

export default Form;