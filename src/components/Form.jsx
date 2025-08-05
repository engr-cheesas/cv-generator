import {useState} from 'react'
import PersonalInfoForm from './PersonalInfoForm'
import EducationInfoForm from './EducationInfoForm'
import ExperienceInfoForm from './ExperienceInfoForm'

const Form = () => {

    const [formData, setFormData] =useState({
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
            experienceInfo: {
                position: "",
                company: "",
                period: "",
                companyLoc: "",
                responsibilities: ""
            }
        })

    const updatePersonalInfo = (e) => {
        setFormData({
            ...formData, personalInfo: {
                ...formData.personalInfo, [e.target.name] : e.target.value
            }})
    }

    const updateEducationInfo = (e) => {
        setFormData({
            ...formData, educationInfo: {
                ...formData.educationInfo, [e.target.name] : e.target.value
            }})
    }

    const updateExperienceInfo = (e) => {
        setFormData({
            ...formData, experienceInfo: {
                ...formData.experienceInfo, [e.target.name] : e.target.value
            }})
    }

    return (

        <div className='min-h-screen flex items-center justify-center bg-blue-200'>
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