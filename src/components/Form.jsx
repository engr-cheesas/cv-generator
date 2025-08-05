import PersonalInfoForm from './PersonalInfoForm'
import EducationInfoForm from './EducationInfoForm'
import ExperienceInfoForm from './ExperienceInfoForm'

const Form = ({
    formData, 
    // setFormData,
    updatePersonalInfo,
    updateEducationInfo,
    updateExperienceInfo}) => {

    return (

        <div className='flex items-center justify-center'>
            <form className='w-1/2 flex flex-col gap-5'>

                {/* Personal Information Section */}

                    <PersonalInfoForm 
                        personalInfo={formData.personalInfo} 
                        onChange={updatePersonalInfo}
                    />
                    
                {/* Education Section  */}

                    <EducationInfoForm 
                        educationInfo={formData.educationInfo} 
                        onChange={updateEducationInfo}
                    />

                {/* Experience Section  */}

                    <ExperienceInfoForm 
                        experienceInfo={formData.experienceInfo} 
                        onChange={updateExperienceInfo}
                    />
            </form>
        </div>
      );
}

export default Form;