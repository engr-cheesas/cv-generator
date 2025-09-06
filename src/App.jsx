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
        updateSummary,
        updatePersonalInfo,
        updateSkillInfo,
        updateEducationInfo,
        updateExperienceInfo,
        updateProjectInfo,
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

    const [isEditing, setIsEditing] = useState(true) // true: edit mode, false: preview mode

    const handleEditSave = () => {
        setIsEditing(!isEditing)
    }

    return ( 
        // Root container for the application
        <div className={`flex flex-col items-center min-h-screen pt-10 transition-colors duration-300 ${
            !isEditing ? 'bg-amber-900' : 'bg-stone-100'
        }`}>
        
            {/* Buttons */}
            <div className="flex gap-10 mb-4">
                <button
                    onClick={handleEditSave}
                    className="bg-amber-600 text-white w-50 px-4 py-4 rounded hover:bg-amber-400 transition-colors"
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>

                
                <PDFDownloadLink
                    key={JSON.stringify(formData)}  
                    document={<CVDocument safeFormData={safeFormData} />}
                    fileName="cv.pdf"
                >
                    <button className="bg-lime-900 text-white w-50 px-4 py-4 rounded hover:bg-lime-600 transition-colors">
                        Download PDF
                    </button>
                </PDFDownloadLink>
            
            </div>
            
            {/* Form */}
            {isEditing && (
                <Form 
                    formData={formData} 
                    // setFormData={setFormData}
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
            )}

            {/* CV Preview */}
            {!isEditing && (
                <div className='mx-auto'>
                    <div>
                        <CVPreview 
                            formData={formData || placeholderData} 
                        />
                    </div> 

                </div>
            )}
            
        </div>   
    );
}

export default App;