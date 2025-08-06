const CVPreview = ({formData}) => {
    const {personalInfo, educationInfo} = formData

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

                <section>
                    <h2 className="text-xl font-semibold"> Education </h2>
                    <li> 
                        <p className="text-md font-medium"> {educationInfo.school} </p>
                        <p className="text-sm font-medium"> {educationInfo.location} </p>
                    </li>
                </section>
            </div>
        </div>
    );
}

export default CVPreview;