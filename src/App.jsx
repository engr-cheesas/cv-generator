import {useState} from 'react';
import Form from './components/Form'; 
import CVPreview from './components/CVPreview';

function App () {

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
                responsibilities: [""]
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

    const updateExperienceInfo = (e, index=null) => {
        const {name, value} = e.target;

        if (name === 'responsibilities' && index !== null) {
            const updatedResponsibilities = [...formData.experienceInfo.responsibilities];
            updatedResponsibilities[index] = value;

            setFormData({...formData, experienceInfo: {...formData.experienceInfo,
                responsibilities: updatedResponsibilities
            }});
        }
        else {
            setFormData({
                ...formData, experienceInfo: {...formData.experienceInfo, [name] : value}
            })
        }

        setFormData({
            ...formData, experienceInfo: {
                ...formData.experienceInfo, [e.target.name] : e.target.value
            }})
    }

    const addResponsibility = () => {
        setFormData({...formData, experienceInfo: 
            {...formData.experienceInfo, responsibilities: 
                [...formData.experienceInfo.responsibilities, ""]
            }})
    }

    const [showPreview, setShowPreview] = useState(false);

    return ( 
        // Root container for the application
        <div className={`flex min-h-screen gap-6 ${showPreview ? 'justify-between' : 'justify-center'} bg-bubbles`}>
            {/* Form and CV Preview Panel */}
            <div className={`${showPreview ? 'w-1/2' : 'w-full'} transition-all`}>
                {/* Form and Button  */}
                <div className='flex flex-col gap-4 w-full'> 
                    <Form 
                    formData={formData} 
                    setFormData={setFormData}
                    onGenerate = {() => {setShowPreview(true)}}
                    updatePersonalInfo={updatePersonalInfo}
                    updateEducationInfo={updateEducationInfo}
                    updateExperienceInfo={updateExperienceInfo}
                    isPreviewOpen={showPreview}
                    addResponsibility={addResponsibility}
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
    );
}

export default App;