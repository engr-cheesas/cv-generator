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
        <div className="flex justify-center items-start w-full h-full mb-10 mt-4"> 
            {/* Paper-like CV */}
            <div 
                className="bg-white p-10 shadow-lg font-times mr-5"
                style={{
                    width: "8.5in",
                    height: "11in"
                }}
            >
                <header className="mb-2 flex flex-col items-center justify-center"> 
                    <h1 className="text-[42px] font-bold items-center justify-center uppercase"> {personalInfo.name} </h1>
                    <p className="text-[18px]"> {personalInfo.email} | {personalInfo.phone} | {personalInfo.address} </p>
                </header>

                {/* Professional Summary Section */}

                <section className="mb-2">
                    <h3 className="text-[18px] font-semibold border-b"> Professional Summary </h3>
                        <div className="flex justify-between items-center"> 
                            <p className="text-[16px] text-justify pt-2 px-2"> {profSummary.summary} </p>
                        </div>
                </section>

                {/* Skill Section */}

                <section className="mb-2">
                    <h3 className="font-semibold border-b text-[18px]">Skills</h3>
                        {formData.skillInfo && formData.skillInfo.length > 0 && (
                        <div className="pt-2">
                            <ul className="list-disc px-6 mt-1">
                            {skillInfo.map(({skillCategory, skillName}, index) => (
                            <li key={index} className="text-[16px]">
                                <strong> {skillCategory}: </strong> {skillName}
                            </li>
                            ))}
                            </ul>
                        </div>
                        )}
                </section>

                {/* Education Section */}

                <section className="mb-2">
                    <h3 className="font-semibold border-b text-[18px]">Education</h3>
                        <div className="flex justify-between items-center pt-2 px-2"> 
                            <span className="flex items-center">
                                <span className="font-medium text-[16px]"> {educationInfo.school} </span>
                                <span className="ml-2 font-medium text-[16px]"> - {educationInfo.location} </span>
                            </span>
                            <span className="text-gray-500 text-[16px]"> 
                                {educationInfo.startDate} - {educationInfo.endDate}
                            </span>
                        </div>
                        <p className="text-[16px] italic text-gray-400 ml-6"> {educationInfo.degree} </p>
                </section>

                {/* Experience Section  */}
                <section className="mb-2">
                    <h3 className="font-semibold border-b text-[18px]">Work Experience</h3>
                    {experienceInfo.map((exp, index) => (
                    <div key={index} className="mb-2 pt-2 px-2">   
                        <p className="text-[16px]font-semibold mt-0.5"> {exp.position} </p>
                        <div className="flex justify-between">
                            <span> 
                                <span className="text-[16px] font-medium"> {exp.company} </span>
                                <span className="text-[16px] font-medium"> {exp.companyLoc} </span>
                            </span>
                            <span className="text-[16px] text-gray-500"> {exp.period} </span>
                        </div>

                        {exp.roles && exp.roles.length > 0 && (
                            <ul className="list-disc ml-8 mt-1"> 
                                {exp.roles.map((role, roleIndex) => 
                                <li key={roleIndex} className="text-[16px]"> {role} </li>)}
                            </ul>
                        )}
                    </div>
                    ))}
                </section>
                
                {/* Projects Section */}
                <section className="mb-2">
                    <h3 className="font-semibold border-b text-[18px]">Projects</h3>
                    {projectInfo.map((proj, index) => (
                        <div key={index} className="mb-4 pt-2 px-2">
                            <p className="text-[16px] font-semibold mt-0.5"> {proj.projectName} </p>
                            {proj.projectDef && proj.projectDef.length > 0 && (
                                <ul className="list-disc ml-8 mt-1"> 
                                    {proj.projectDef.map((projectDef, defIndex) => 
                                    <li key={defIndex} className="text-[16px]"> {projectDef} </li>)}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default CVPreview;