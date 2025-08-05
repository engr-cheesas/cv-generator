import React, {useState} from 'react'

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
                responsibilities: []
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
        <form className='flex flex-col gap-5'>

            {/* Personal Information Section */}

            <section className='flex flex-col gap-4 bg-gray-100 p-4 rounded-lg'>
                <div>
                    <label> 
                        Name: 
                    </label>
                    <input type='text'
                            value={formData.personalInfo.name}
                            name="name"
                            onChange={updatePersonalInfo}/> 
                </div>
                <div>
                    <label> 
                        Address: 
                    </label>
                    <input type='text'
                            value={formData.personalInfo.address}
                            name="address"
                            onChange={updatePersonalInfo}/>
                </div>
                <div className='flex flex-row gap-2'>
                    <div>
                        <label> 
                            Email: 
                        </label>
                        <input type='text'
                            value={formData.personalInfo.email}
                            name="email"
                            onChange={updatePersonalInfo}/>
                    </div>
                    <div>
                        <label> 
                            Phone:
                        </label>
                        <input type='text'
                            value={formData.personalInfo.phone}
                            name="phone"
                            onChange={updatePersonalInfo}/>
                    </div>
                </div>
                </section>
                
                {/* Education Section  */}

                <section className='flex flex-col gap-4 bg-gray-100 p-4 rounded-lg'>
                    <div>
                        <label>
                            School
                        </label>
                        <input type='text' 
                            value = {formData.educationInfo.school}
                            name="school"
                            onChange={updateEducationInfo}/>
                    </div>
                    <div>
                        <label>
                            Location
                        </label>
                        <input type='text' 
                            value = {formData.educationInfo.location}
                            name="location"
                            onChange={updateEducationInfo}/>
                    </div>
                    <div>
                        <label>
                            Degree
                        </label>
                        <input type='text' 
                            value = {formData.educationInfo.degree}
                            name="degree"
                            onChange={updateEducationInfo}/>
                    </div>
                    <div className='flex flex-row gap-2'> 
                        <div>
                            <label>
                                Start Date
                            </label>
                            <input type='text' 
                            value = {formData.educationInfo.startDate}
                            name="startDate"
                            onChange={updateEducationInfo}/>
                        </div>
                        <div>
                            <label>
                                End Date
                            </label>
                            <input type='text' 
                            value = {formData.educationInfo.endDate}
                            name="endDate"
                            onChange={updateEducationInfo}/>
                        </div>
                    </div>
                </section>

                {/* Experience Section  */}

                <section className='flex flex-col gap-4 bg-gray-100 p-4 rounded-lg'>
                    <div> 
                        <label>
                            Position
                        </label>
                        <input type='text'
                            value={formData.experienceInfo.position}
                            name="position"
                            onChange={updateExperienceInfo}/>
                    </div>
                    <div> 
                        <label>
                            Company
                        </label>
                        <input type='text'
                            value={formData.experienceInfo.company}
                            name="company"
                            onChange={updateExperienceInfo}/>
                    </div>
                    <div className='flex flex-row gap-2'> 
                        <div>
                            <label>
                                Period
                            </label>
                            <input type='text'
                            value={formData.experienceInfo.period}
                            name="period"
                            onChange={updateExperienceInfo}/>
                        </div>
                        <div>
                            <label>
                                Location
                            </label>
                            <input type='text'
                            value={formData.experienceInfo.companyLoc}
                            name="companyLoc"
                            onChange={updateExperienceInfo}/>
                        </div>
                    </div>
                    <div>
                        <label>
                            Responsibilities
                        </label>
                        <input type='text'
                            value={formData.experienceInfo.responsibilities}
                            name="responsibilities"
                            onChange={updateExperienceInfo}/>
                    </div>
                </section>
        </form>
      );
}

export default Form;