const ProjectSection = ({projectInfo, updateProjectInfo, projIndex}) => {
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
                name="projectDef"
                value={projectInfo.projectDef}
                onChange={(e) => updateProjectInfo(e, projIndex)}
                className="bg-bubbles border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
            
                <button type="button"
                    className="px-4 py-2 rounded text-white bg-blue-500">
                + </button>
            </div>
        </div>
    );
}

export default ProjectSection;