const ProjectSection = ({projectInfo}) => {
    return (  
        <div>
            <input type="text"
                placeholder="Project Name"
                name="projectName"
                value={projectInfo.projectName}
                className="bg-bubbles border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
        
            <div>
                <input type="text" 
                placeholder="Description"
                name="projectDef"
                value={projectInfo.projectDef}
                className="bg-bubbles border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
            
                <button type="button"
                    className="px-4 py-2 rounded text-white">
                + </button>
            </div>
        </div>
    );
}

export default ProjectSection;