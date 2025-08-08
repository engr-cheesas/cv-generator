const EducationInfoForm = ({educationInfo, onChange}) => {
    return (  
        <div className='flex flex-col gap-4 w-full mt-4'>
        
            <input type='text' 
                placeholder='School Name'
                value = {educationInfo.school}
                name="school"
                onChange={onChange}
                className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
        
            <input type='text' 
                placeholder='Location'
                value = {educationInfo.location}
                name="location"
                onChange={onChange}
                className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
        
                   
                <input type='text' 
                    placeholder='Degree'
                    value = {educationInfo.degree}
                    name="degree"
                    onChange={onChange}
                    className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
            
                <div className='flex flex-row gap-2'> 
                    <input type='text' 
                    placeholder='Start Date'
                    value = {educationInfo.startDate}
                    name="startDate"
                    onChange={onChange}
                    className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-1/2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
                
                    <input type='text' 
                    placeholder='End Date'
                    value = {educationInfo.endDate}
                    name="endDate"
                    onChange={onChange}
                    className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 w-1/2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
                </div>
                </div>
    );
}

export default EducationInfoForm;