import {useState} from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Form from './components/Form'; 
import CVPreview from './components/CVPreview';
import CVDocument from './components/CVDocument'; 
import useFormData from './hooks/useFormData';
import mergePlaceholder from './utils/mergePlaceholder';
import { placeholderData } from './utils/placeholderData';

function App () {
    const {
        formData, 
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

    const safeFormData = mergePlaceholder(formData, placeholderData);

    const [showPreview, setShowPreview] = useState(false);

    return ( 
        // Root container for the application
        <div className='flex flex-col'>
            
            <div className={`pt-20 flex min-h-screen ${showPreview ? 'justify-between' : 'justify-center'} bg-stone-100`}>
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
                            className='bg-amber-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors duration-300'>
                            Generate CV
                            </button>
                        </div>
                    )}
                    </div>
                </div>

                {showPreview && (
                    <div className='w-1/2 mx-auto bg-stone-100 p-4 rounded'>
                        {/* <p> CV Preview Panel </p> */}
                        <div>
                            <CVPreview 
                                formData={formData || placeholderData} 
                            />
                        </div> 

                        <PDFDownloadLink
                            key={JSON.stringify(formData)}  
                            document={<CVDocument safeFormData={safeFormData} />}
                            fileName="cv.pdf"
                        >
                            <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                                Download PDF
                            </button>
                        </PDFDownloadLink>

                    </div>
                )}
            </div>
        </div>
    );
}

export default App;