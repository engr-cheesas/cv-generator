const ProjectSection = ({projectInfo, updateProjectInfo, projIndex, addProjectDef, deleteProjectDef}) => {

    console.log("updateProjectInfo prop is →", updateProjectInfo);

    return (  
        <div className='flex flex-col gap-4 w-full mt-4'>
            <input type="text"
                placeholder="Project Name"
                name="projectName"
                value={projectInfo.projectName}
                onChange={(e) => updateProjectInfo(e, projIndex)}
                className="bg-bubbles border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
        
            <div className="flex gap-2">
                <input type="text" 
                placeholder="Description"
                name="inputDef"
                value={projectInfo.inputDef}
                onChange={(e) => updateProjectInfo(e, projIndex)}
                className="bg-bubbles border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
            
                <button type="button"
                    onClick={() => addProjectDef(projIndex)}
                    disabled={!projectInfo.inputDef?.trim()}
                    className={`px-4 py-2 rounded text-white transition 
                    ${projectInfo.inputDef?.trim() 
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    + 
                </button>
            </div>

            {(projectInfo?.projectDef?.length ?? 0) > 0 && (
                <div className="flex flex-col gap-2 mt-1"> 
                {projectInfo.projectDef.map((projectDef, defIndex) => 
                    <div key={defIndex} className="flex items-center gap-2"> 
                        <input type="text"
                        value={projectDef}
                        readOnly
                        className="bg-bubbles border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 cursor-not-allowed">
                        </input>
                        <button type="button"
                        onClick={() => deleteProjectDef(projIndex, defIndex)}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white">
                            ✕
                        </button>
                    </div>
                )}
            </div>)}
        </div>
    );
}

export default ProjectSection;