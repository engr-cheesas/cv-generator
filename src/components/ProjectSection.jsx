const ProjectSection = ({projectInfo, updateProjectInfo, projIndex, addProjectDef, deleteProjectDef}) => {

    return (  
        <div className='flex flex-col gap-4 w-full mt-4'>
            <input type="text"
                placeholder="Project Name"
                name="projectName"
                value={projectInfo.projectName}
                onChange={(e) => updateProjectInfo(e, projIndex)}
                className="font-inter rounded-md px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
        
            <div className="flex gap-2">
                <input type="text" 
                placeholder="Description"
                name="inputDef"
                value={projectInfo.inputDef}
                onChange={(e) => updateProjectInfo(e, projIndex)}
                className="font-inter rounded-md px-4 py-2 w-full bg-stone-100 border border-lime-900 focus:ring-lime-600 text-stone-800 transition"/>
            
                <button type="button"
                    onClick={() => addProjectDef(projIndex)}
                    disabled={!projectInfo.inputDef?.trim()}
                    className={`px-4 py-2 rounded text-white transition 
                    ${projectInfo.inputDef?.trim() 
                        ? "bg-lime-900 hover:bg-lime-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    + 
                </button>
            </div>

            {(projectInfo?.projectDef?.length ?? 0) > 0 && (
                <div className="flex flex-col gap-2 mt-1"> 
                {projectInfo.projectDef.map((proj, defIndex) => 
                    <div key={defIndex} className="flex items-center gap-2"> 
                        <input type="text"
                        value={proj}
                        readOnly
                        className="rounded-md px-4 py-2 w-full border bg-stone-100 text-gray-800  cursor-not-allowed">
                        </input>
                        <button type="button"
                        onClick={() => deleteProjectDef(projIndex, defIndex)}
                        className="bg-amber-900 hover:bg-amber-700 px-4 py-2 rounded text-white">
                            ✕
                        </button>   
                    </div>
                )}
            </div>)}
        </div>
    );
}

export default ProjectSection;