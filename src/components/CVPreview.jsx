const CVPreview = ({formData}) => {
    const {personalInfo, educationInfo, experienceInfo} = formData

    console.log(experienceInfo)

    return (  
        // Right-Panel Container
        <div className="flex justify-center items-start w-full h-full"> 
            {/* Paper-like CV */}
            <div className="bg-white max-w-xl w-full p-8 rounded-lg shadow-lg">
                <header className="border-b pb-4 mb-6 flex flex-col items-center justify-center"> 
                    <h1 className="text-3xl font-bold items-center justify-center pt-4"> {personalInfo.name} </h1>
                    <p className="text-sm"> {personalInfo.email} | {personalInfo.phone} | {personalInfo.address} </p>
                </header>

                {/* Education Section */}

                <section className="border-b pb-4 mb-6">
                    <h2 className="text-xl font-semibold"> Education </h2>
                        <div className="flex justify-between items-center"> 
                            <span className="flex items-center">
                                <span className="text-md mr-2"> • </span>
                                <span className="text-md font-medium"> {educationInfo.school} </span>
                                <span className="text-md ml-2 font-medium"> - {educationInfo.location} </span>
                            </span>
                            <span className="text-sm text-gray-500"> 
                                {educationInfo.startDate} - {educationInfo.endDate}
                            </span>
                        </div>
                        <p className="text-sm italic text-gray-400 ml-6"> {educationInfo.degree} </p>
                </section>

                {/* Experience Section  */}
                <section>
                    <h2 className="text-xl font-semibold"> Work Experience </h2>
                    <p className="text-md font-semibold ml-2 mt-0.5"> {experienceInfo.position} </p>
                    <div className="flex justify-between items-center">
                        <span> 
                            <span className="ml-2 text-sm font-medium"> {experienceInfo.company} </span>
                            <span className="text-sm font-medium"> {experienceInfo.companyLoc} </span>
                        </span>
                        <span className="text-sm text-gray-500"> {experienceInfo.period} </span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CVPreview;