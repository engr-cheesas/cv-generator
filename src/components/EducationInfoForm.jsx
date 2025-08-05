const EducationInfoForm = ({educationInfo, onChange}) => {
    return (  
        <section className='flex flex-col gap-4 bg-gray-100 p-4 rounded-lg'>
                    <div>
                        <label>
                            School
                        </label>
                        <input type='text' 
                            value = {educationInfo.school}
                            name="school"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                    </div>
                    <div>
                        <label>
                            Location
                        </label>
                        <input type='text' 
                            value = {educationInfo.location}
                            name="location"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                    </div>
                    <div>
                        <label>
                            Degree
                        </label>
                        <input type='text' 
                            value = {educationInfo.degree}
                            name="degree"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-2/3 px-2"/>
                    </div>
                    <div className='flex flex-row gap-2'> 
                        <div>
                            <label>
                                Start Date
                            </label>
                            <input type='text' 
                            value = {educationInfo.startDate}
                            name="startDate"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-1/2 px-2"/>
                        </div>
                        <div>
                            <label>
                                End Date
                            </label>
                            <input type='text' 
                            value = {educationInfo.endDate}
                            name="endDate"
                            onChange={onChange}
                            className="bg-gray-200 border border-black-200 rounded mt-2 ml-2 mb-4 w-1/2 px-2"/>
                        </div>
                    </div>
                </section>
    );
}

export default EducationInfoForm;