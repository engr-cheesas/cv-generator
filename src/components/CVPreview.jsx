const CVPreview = ({formData}) => {
    const {
        profSummary,
        personalInfo, 
        skillInfo,
        educationInfo, 
        experienceInfo,
        projectInfo} = formData

    return (  
        // Right-Panel Container
        <div className="flex justify-center items-start w-full h-full"> 
            {/* Paper-like CV */}
            <div className="bg-white max-w-xl w-full p-6 shadow-lg font-times">
                <header className="pb-4 flex flex-col items-center justify-center"> 
                    <h1 className="text-3xl font-bold items-center justify-center pt-2 uppercase"> {personalInfo.name} </h1>
                    <p className="text-sm"> {personalInfo.email} | {personalInfo.phone} | {personalInfo.address} </p>
                </header>

                {/* Professional Summary Section */}

                <section className="pb-4 mb-4">
                    <h3 className="font-semibold border-b"> Professional Summary </h3>
                        <div className="flex justify-between items-center"> 
                            <p className="text-sm text-justify"> {profSummary.summary} </p>
                        </div>
                </section>

                {/* Skill Section */}

                <section className="pb-4 mb-4">
                    <h3 className="font-semibold border-b"> Skills </h3>
                        {/* <div className="flex justify-between items-center"> 
                            <p className="text-sm text-justify"> {profSummary.summary} </p>
                        </div> */}
                        
                        {formData.skillInfo && formData.skillInfo.length > 0 && (
                        <ul className="list-disc ml-8 mt-1">
                            {skillInfo.map(({skillCategory, skillName}, index) => (
                            <li key={index} className="text-sm">
                                <strong> {skillCategory}: </strong> {skillName}
                            </li>
                            ))}
                        </ul>
)}
                </section>

                {/* Education Section */}

                <section className="pb-4 mb-4">
                    <h3 className="font-semibold border-b"> Education </h3>
                        <div className="flex justify-between items-center"> 
                            <span className="flex items-center">
                                <span className="text-sm mr-2"> • </span>
                                <span className="text-sm font-medium"> {educationInfo.school} </span>
                                <span className="text-sm ml-2 font-medium"> - {educationInfo.location} </span>
                            </span>
                            <span className="text-sm text-gray-500"> 
                                {educationInfo.startDate} - {educationInfo.endDate}
                            </span>
                        </div>
                        <p className="text-sm italic text-gray-400 ml-6"> {educationInfo.degree} </p>
                </section>

                {/* Experience Section  */}
                <section>
                    <h3 className="font-semibold border-b"> Work Experience </h3>
                    {experienceInfo.map((exp, index) => (
                    <div key={index} className="mb-4">   
                        <p className="text-sm font-semibold ml-2 mt-0.5"> {exp.position} </p>
                        <div className="flex justify-between">
                            <span> 
                                <span className="ml-2 text-sm font-medium"> {exp.company} </span>
                                <span className="text-sm font-medium"> {exp.companyLoc} </span>
                            </span>
                            <span className="text-sm text-gray-500"> {exp.period} </span>
                        </div>

                        {exp.roles && exp.roles.length > 0 && (
                            <ul className="list-disc ml-8 mt-1"> 
                                {exp.roles.map((role, roleIndex) => 
                                <li key={roleIndex} className="text-sm"> {role} </li>)}
                            </ul>
                        )}
                    </div>
                    ))}
                </section>
                
                {/* Projects Section */}
                <section className="pb-4 mb-4">
                    <h3 className="font-semibold border-b"> Projects </h3>
                    {projectInfo.map((proj, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-sm font-semibold ml-2 mt-0.5"> {proj.projectName} </p>
                            {proj.projectDef && proj.projectDef.length > 0 && (
                                <ul className="list-disc ml-8 mt-1"> 
                                    {proj.projectDef.map((projectDef, defIndex) => 
                                    <li key={defIndex} className="text-sm"> {projectDef} </li>)}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default CVPreview;