import {useState} from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Navbar from './components/Navbar';
import Form from './components/Form'; 
import CVPreview from './components/CVPreview';
import CVDocument from './components/CVDocument'; 
import useFormData from './hooks/useFormData';


function App () {
    const {
        formData, 
        placeholderData,
        // setFormData,
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
    } = useFormData()

    const safeFormData = {
        profSummary: formData?.profSummary || placeholderData.profSummary,
        personalInfo: formData?.personalInfo || placeholderData.personalInfo,
        skillInfo: formData?.skillInfo || placeholderData.skillInfo,
        educationInfo: formData?.educationInfo || placeholderData.educationInfo,
        experienceInfo: formData?.experienceInfo || placeholderData.experienceInfo,
        projectInfo: formData?.projectInfo || placeholderData.projectInfo,
    };

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
                        // setFormData={setFormData}
                        isPreviewOpen={showPreview}
                        onGenerate = {() => {setShowPreview(true)}}
                        updateSummary={updateSummary}
                        updatePersonalInfo={updatePersonalInfo}
                        updateEducationInfo={updateEducationInfo}
                        updateExperienceInfo={updateExperienceInfo}
                        updateSkillInfo={updateSkillInfo}
                        updateProjectInfo={updateProjectInfo}
                        addSkill={addSkill}
                        deleteSkill={deleteSkill}
                        toggleEditSkill={toggleEditSkill}
                        addRole={addRole}
                        deleteRole={deleteRole}
                        addExperience={addExperience}
                        deleteExperience={deleteExperience}
                        addProject={addProject}
                        deleteProject={deleteProject}
                        addProjectDef={addProjectDef}
                        deleteProjectDef={deleteProjectDef}
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
                        <div>
                            <CVPreview 
                                formData={formData || placeholderData} 
                            />
                        </div> 
                        <PDFDownloadLink
                            document={<CVDocument safeFormData={safeFormData} />}
                            fileName="cv.pdf"
                        >
                            {({ loading }) => (
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                                {loading ? 'Preparing PDF...' : 'Download PDF'}
                                </button>
                            )}
                        </PDFDownloadLink>

                    </div>
                )}
            </div>
        </div>
    );
}

export default App;