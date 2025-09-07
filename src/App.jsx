import {useState} from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Form from './components/Form'; 
import CVPreview from './components/CVPreview';
import CVDocument from './components/CVDocument'; 
import Navbar from './components/Navbar';
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
            !isEditing ? 'bg-[#f2ece5]' : 'bg-[#e5f5e0]'
        }`}>

            <Navbar />

            {/* <div className="mb-5 mt-15 text-center">
                <h1 className="font-skillet text-3xl leading-snug tracking-wide text-green-800">
                    Because your <span className="text-amber-600 italic">first impression</span>
                    <br />
                    shouldn't look like your <span className="text-brown-600 underline">first draft.</span>
                </h1>
            </div> */}

        
            {/* Buttons */}
            <div className="flex gap-10 mb-4 mt-10">
                <button
                    onClick={handleEditSave}
                    className="bg-lime-900 hover:bg-lime-700 text-white w-50 px-4 py-4 rounded-lg transition-colors"
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>

                
                <PDFDownloadLink
                    key={JSON.stringify(formData)}  
                    document={<CVDocument safeFormData={safeFormData} />}
                    fileName="cv.pdf"
                >
                    <button className="bg-brown hover:bg-amber-400 text-white w-50 px-4 py-4 rounded-lg transition-colors">
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